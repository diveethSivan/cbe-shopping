const NewInvestment = require("../models/newInvestment");

/**
 *
 * Validate CustomerId
 * @input id
 * @response customerDetails
 *
 * */
exports.fetchDeadines = async (fromDate, toDate) => {
  console.log("fetchDeadines request : " + fromDate + " " + toDate);
  try {
    let response = await NewInvestment.find({
      "endDate.timestamp": {
        $gte: fromDate,
        $lt: toDate,
      },
    });
    return response;
  } catch (error) {
    console.error(
      "Exception while fetching the Investment Deadlines : ",
      error
    );
  }
};
