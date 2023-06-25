const { Contact } = require("../../models");
const { HttpError, ctrlWrapper } = require("../../helpers");

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;

  const updatedContactByFavorite = await Contact.findByIdAndUpdate(
    contactId,
    req.body,
    {
      new: true,
    }
  );
  if (!updatedContactByFavorite) {
    throw HttpError(404, "Not found");
  }
  res.json(updatedContactByFavorite);
};

module.exports = updateFavorite;
