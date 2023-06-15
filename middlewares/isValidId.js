const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  //   console.log(req.params);
  if (!isValidObjectId(contactId)) {
    // console.log(req.params);
    next(HttpError(400, `${contactId} is non valid id`));
  }
  next();
};

module.exports = isValidId;
