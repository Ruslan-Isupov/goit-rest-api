const express = require("express");

const router = express.Router();

const contacts = require("../../models/contacts");

const HttpError = require("../../helpers/HttpError");

const Joi = require("joi");

const contactsSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});
router.get("/", async (req, res, next) => {
  try {
    const data = await contacts.listContacts();

    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contactById = await contacts.getContactById(contactId);

    if (!contactById) {
      throw HttpError(404, "Not found");
    }
    res.json(contactById);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const body = req.body;
    const { error } = contactsSchema.validate(body);
    if (error) {
      throw HttpError(400, "missing required name field");
    }

    const newContact = await contacts.addContact(body);
    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
});

router.put("/:contactId", async (req, res, next) => {
  try {
    const body = req.body;
    const { error } = contactsSchema.validate(body);
    if (error) {
      throw HttpError(400, "missing fields");
    }
    const { contactId } = req.params;

    const updatedContact = await contacts.updateContact(contactId, body);
    if (!updatedContact) {
      throw HttpError(404, "Not found");
    }
    res.status(201).json(updatedContact);
  } catch (error) {
    next(error);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const removedContact = await contacts.removeContact(contactId);
    if (!removedContact) {
      throw HttpError(404, "Not found");
    }
    res.json({ message: "Contact deleted" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
