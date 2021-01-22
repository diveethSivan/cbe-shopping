const cron = require("node-cron");
const moment = require("moment");
const nodemailer = require("nodemailer");
const investmentDeadlineService = require("../services/investmentDeadlineService");

//Constants
const TIMESTAMP_FORMAT = "YYYY-MM-DD";
const EMAIL = "diveethsivan10@gmail.com";

//Every day at 10.00 AM
let cronExpression = "* * * * *";

//Email Message Object
let mailOptions = {
  from: EMAIL,
  to: EMAIL,
  subject: "",
  text: "",
};

//Email Transporter configuration
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: "Diveeth@1996",
  },
});

let investmentDeadlineScheduler = cron.schedule(cronExpression, async () => {
  let deadlines = await investmentDeadlineService.fetchDeadines(
    moment().format(TIMESTAMP_FORMAT),
    moment().add({ days: 2 }).format(TIMESTAMP_FORMAT)
  );
  console.log(deadlines);
  deadlines.forEach((item, index) => {
    mailOptions.subject = "Investment Deadline Notice - " + item.id;
    mailOptions.text =
      "The investment made by " + item.name + " is ending tomorrow.";
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) console.log(err);
      else console.log("Email sent : ", info);
    });
  });
});

module.exports = {
  investmentDeadlineScheduler: investmentDeadlineScheduler,
};
