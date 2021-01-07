const NewInvestment = require("../models/newInvestment");
const moment = require("moment");

exports.addCustomer = async (req, res) => {
  console.log("request : ", req.query);
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
      version.timestamp = moment().format("YYYY-MM-DD, h:mm:ss a");
      version.investment = data.investment;
      version.totalInvestment = totalInvestment;
      response.versions = [...response.versions, version];
      console.log("response : ", response);
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
    console.error("New Investment inserion error : ", error);
  }
};
