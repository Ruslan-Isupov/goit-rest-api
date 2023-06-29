const { User } = require("../../models");
const { HttpError } = require("../../helpers");
const { BASE_URL } = process.env;

const resendVerify = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401);
  }
  if (user.verify) {
    throw HttpError(400, "Email already verify");
  }
  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target ="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationCode}">Click to verify email</a>`,
  };

  await sendEmail(verifyEmail);
  res.json({
    message: "Verify email send success",
  });
};
module.exports = resendVerify;
