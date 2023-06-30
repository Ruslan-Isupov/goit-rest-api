const { HttpError } = require("../../helpers");
const { User } = require("../../models");

const verify = async (req, res) => {
  const { verificationCode } = req.params;
  console.log(verificationCode);
  const user = await User.findOne({ verificationCode });
  console.log(user);
  if (!user) {
    throw HttpError(404, "User not found");
  }

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationCode: null,
  });
  res.json({
    message: "Verification successful",
  });
};

module.exports = verify;
