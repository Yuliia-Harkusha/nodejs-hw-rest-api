const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY, EMAIL_SENDER } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendMail = async (data) => {
  const email = { ...data, from: `${EMAIL_SENDER}` };
  await sgMail.send(email);
  return true;
};

module.exports = sendMail;
