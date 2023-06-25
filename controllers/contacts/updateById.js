const { Contact } = require("../../models");
const { HttpError, ctrlWrapper } = require("../../helpers");

const updateById = async (req, res) => {
  const { contactId } = req.params;

  const updatedContact = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!updatedContact) {
    throw HttpError(404, "Not found");
  }
  res.status(201).json(updatedContact);
};

module.exports = updateById;
