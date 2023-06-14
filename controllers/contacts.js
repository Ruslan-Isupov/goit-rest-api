const contacts = require("../models/contacts");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const data = await contacts.listContacts();

  res.json(data);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const contactById = await contacts.getContactById(contactId);

  if (!contactById) {
    throw HttpError(404, "Not found");
  }
  res.json(contactById);
};

const add = async (req, res) => {
  const newContact = await contacts.addContact(req.body);
  res.status(201).json(newContact);
};

const updateById = async (req, res) => {
  const { contactId } = req.params;

  const updatedContact = await contacts.updateContact(contactId, req.body);
  if (!updatedContact) {
    throw HttpError(404, "Not found");
  }
  res.status(201).json(updatedContact);
};

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const removedContact = await contacts.removeContact(contactId);
  if (!removedContact) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "Contact deleted" });
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),
};
