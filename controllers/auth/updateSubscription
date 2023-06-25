const jwt = require("jsonwebtoken");
const { User } = require("../../models");
const { HttpError } = require("../../helpers");
const { SECRET_KEY } = process.env;

const updateSubscription = async (req, res) => {
  const { authorization = "" } = req.headers;

  const [bearer, token] = authorization.split(" ");

  const { id } = jwt.verify(token, SECRET_KEY);
  console.log(id);

  const updatedUserBySubscription = await User.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedUserBySubscription) {
    throw HttpError(404, "Not found");
  }
  res.json(updatedUserBySubscription);
};

module.exports = updateSubscription;
