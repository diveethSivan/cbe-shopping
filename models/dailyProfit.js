const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

// Schema
const Schema = mongoose.Schema;
const DailyProfitSchema = new Schema({
  id: String,
  investment: String,
  dailyProfit: String,
  gst: String,
  gstProfit: String,
  investorProfit: String,
  ourProfit: String,
  timestamp: String,
});

// Model
const DailyProfit = mongoose.model("DailyProfit", DailyProfitSchema);

module.exports = DailyProfit;
