const { Contact } = require("../../models");
// const { HttpError, ctrlWrapper } = require("../helpers");

const add = async (req, res) => {
  const { _id: owner } = req.user;

  const newContact = await Contact.create({ ...req.body, owner });
  res.status(201).json(newContact);
};

module.exports = add;
