const express = require("express");
const newInvestment = require('../services/newInvestmentService');

const router = express.Router();

// Routes

router.get("/new-investment", (req, res) => {
  return newInvestment.addCustomer(req, res);
});

module.exports = router;
