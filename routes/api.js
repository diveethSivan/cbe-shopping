const express = require("express");
const newInvestment = require("../services/newInvestmentService");

const router = express.Router();

// Routes

router.get("/new-investment", (req, res) => {
  return newInvestment.addCustomer(req, res);
});

router.get("/validate-customerid", (req, res) => {
  return newInvestment.validateCustomerId(req, res);
});

router.get("/daily-profit", (req, res) => {
  return newInvestment.insertDailyProfit(req, res);
});

router.get("/details", (req, res) => {
  return newInvestment.fetchDetails(req, res);
});

module.exports = router;
