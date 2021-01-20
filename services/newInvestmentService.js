const moment = require("moment");
const NewInvestment = require("../models/newInvestment");
const DailyProfit = require("../models/dailyProfit");

//Constants
const TIMESTAMP_FORMAT = "YYYY-MM-DD";

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
  let { id, months } = data;
  let version = {},
    endDate = {};

  //Set version Object
  version.timestamp = moment().format(TIMESTAMP_FORMAT);
  version.investment = data.investment;

  //Set endDate object
  endDate.timestamp = moment()
    .add(parseInt(months), "months")
    .format(TIMESTAMP_FORMAT);

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

      console.log(
        "endDate : ",
        moment().add(3, "months").format(TIMESTAMP_FORMAT)
      );

      version.totalInvestment = totalInvestment;

      //add it to response
      response.versions = [...response.versions, version];
      response.endDate = [...response.endDate, endDate];

      await response.save();
      return res.json({
        msg: responseMsg,
      });
    } else {
      version.totalInvestment = data.investment;
      data.versions = [version];
      data.endDate = [endDate];
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
