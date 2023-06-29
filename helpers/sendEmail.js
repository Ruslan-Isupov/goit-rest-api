const nodemailer = require("nodemailer");

require("dotenv").config();

const { UKR_NET_EMAIL, UKR_NET_Password } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: UKR_NET_EMAIL,
    pass: UKR_NET_Password,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

// const email = {
//
//   to: "risupov44@gmail.com",
//   subject: "Verify email",
//   html: "<p>Verify email</p>",
// };

const sendEmail = async (data) => {
  const email = { ...data, from: UKR_NET_EMAIL };
  await transport.sendMail(email);
  return true;
};

// transport
//   .sendMail(email)
//   .then(() => console.log("Email send success"))
//   .catch((error) => console.log(error.message));
module.exports = sendEmail;
