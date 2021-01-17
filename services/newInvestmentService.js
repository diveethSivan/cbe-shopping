const moment = require("moment");
const NewInvestment = require("../models/newInvestment");
const DailyProfit = require("../models/dailyProfit");

//Constants
const TIMESTAMP_FORMAT = "YYYY-MM-DD, h:mm:ss a";

/**
 *
 * Add a New Customer
 * @input id, name, dob, investment,  months
 * @response responseMessage
 *
 * */
exports.addCustomer = async (req, res) => {
  console.log("addCustomer request : ", req.query);
  const data = req.query;
  const Investment = new NewInvestment(data);
  let { id } = data;
  try {
    let response = await NewInvestment.findOne({
      id,
    });
    if (response) {
      let totalInvestment =
        parseInt(data.investment) + parseInt(response.investment);
      let responseMsg =
        "Record already exists! Updated the investement amount from " +
        response.investment +
        " to " +
        totalInvestment;
      response.investment = totalInvestment + "";
      let version = {};
      version.timestamp = moment().format(TIMESTAMP_FORMAT);
      version.investment = data.investment;
      version.totalInvestment = totalInvestment;
      response.versions = [...response.versions, version];
      await response.save();
      return res.json({
        msg: responseMsg,
      });
    } else {
      NewInvestment.create(data);
      return res.json({
        msg: "Record Saved!",
      });
    }
  } catch (error) {
    console.error("New Investment insertion error : ", error);
  }
};

/**
 *
 * Validate CustomerId
 * @input id
 * @response customerDetails
 *
 * */
exports.validateCustomerId = async (req, res) => {
  console.log("validateCustomerId request : ", req.query);
  const data = req.query;
  const Investment = new NewInvestment(data);
  let { id } = data;
  try {
    let response = await NewInvestment.findOne({
      id,
    });
    return res.json(response);
  } catch (error) {
    console.error("CustomerId validation error : ", error);
  }
};

/**
 *
 * Insert Daily Profit
 * @input id, investment, dailyProfit, gst, gstProfit, investorProfit, ourProfit
 * @response responseMessage
 *
 * */
exports.insertDailyProfit = async (req, res) => {
  console.log("insertDailyProfit request : ", req.query);
  const data = req.query;
  data.timestamp = moment().format(TIMESTAMP_FORMAT);
  const dailyProfit = new DailyProfit(data);
  try {
    let response = await DailyProfit.create(data);
    return res.json(response);
  } catch (error) {
    console.error("Daily profit insertion error : ", error);
  }
};

/**
 *
 * Fetch Customer Details
 * @input id, fromDate, toDate
 * @response details
 *
 * */
exports.fetchDetails = async (req, res) => {
  console.log("fetchDetails request : ", req.query);
  const data = req.query;
  const dailyProfit = new DailyProfit(data);
  let { customerId, fromDate, toDate } = data;
  try {
    let response = await DailyProfit.find({
      customerId,
      timestamp: {
        $gte: fromDate,
        $lt: toDate,
      },
    });
    return res.json(response);
  } catch (error) {
    console.error("Customer details fetching error : ", error);
  }
};
