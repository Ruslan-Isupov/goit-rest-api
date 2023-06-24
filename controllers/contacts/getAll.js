const { Contact } = require("../../models");

// const { HttpError, ctrlWrapper } = require("../helpers");
// const { model } = require("mongoose");
const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  // const { page = 1, limit = 2, ...query } = req.query;
  console.log(Contact);
  // const skip = (page - 1) * limit;
  // const data = await Contact.find({ owner, query }, { skip, limit }).populate("owmer", "name email")
  const data = await Contact.find({ owner });
  console.log(data);
  res.json(data);
};

module.exports = getAll;
