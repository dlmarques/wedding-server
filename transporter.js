const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log("Error with the transporter:", error);
  } else {
    console.log("Transporter is ready to send emails:", success);
  }
});

module.exports = transporter;
