const { HttpError } = require("../../helpers");
const { User } = require("../../models");

const verify = async (req, res) => {
  console.log(req.params);
  const { verificationCode } = req.params;
  console.log(verificationCode);
  const user = await User.findOne({ verificationCode });
  if (!user) {
    throw HttpError(401);
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationCode: "",
  });
  res.json({
    message: "Email verify success",
  });
};

module.exports = verify;
