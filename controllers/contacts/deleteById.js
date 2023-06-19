// const deleteById = async (req, res) => {
//   const { contactId } = req.params;
//   const removedContact = await Contact.findByIdAndRemove(contactId);
//   if (!removedContact) {
//     throw HttpError(404, "Not found");
//   }
//   res.json({ message: "Contact deleted" });
// };
// module.exports = deleteById;
