const express = require("express");

const router = express.Router();

const NewInvestment = require("../models/newInvestment");

// Routes

router.get("/new-investment", (req, res) => {
  return test(req, res);
});

let test = async (req, res) => {
  const data = {
    id: "ryan15152019",
    name: "ryan",
    dob: "15-15-2019",
    investment: "100000",
    months: "3",
  };
  const Investment = new NewInvestment(data);
  let { id } = data;
  try {
    let response = await NewInvestment.updateOne(
      {
        id,
      },
      {
        $set: data,
      },
      {
        upsert: true,
        returnNewDocument: false,
      }
    );
    let responseMessage = {};
    console.log(response);
    if (response && response.nModified && response.nModified != 0) {
      responseMessage = {
        msg:
          "Record already exists! Existing entries are updated as per the last submitted form.",
      };
    } else {
      responseMessage = {
        msg: "Record Saved!",
      };
    }
    return res.json(responseMessage);
  } catch (error) {
    console.error("New Investment inserion error : ", error);
  }
};

module.exports = router;
