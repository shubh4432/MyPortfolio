const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('client/build'))

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", //replace with your email provider
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});
app.post("/send", (req, res, next) => {
  //var name = req.body.name;
  var email = req.body.email;

  var message = req.body.message;

  var mail = {
    from: email,
    to: process.env.EMAIL,

    text: message,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});
const port = process.env.PORT ||3001
app.listen(port, console.log("server started...."));
