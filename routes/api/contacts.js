const express = require("express");

const router = express.Router();

// const ctrl = require("../../controllers/contacts");
const { contactsCtrl } = require("../../controllers");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const { contacts } = require("../../schemas");

router.get("/", authenticate, contactsCtrl.getAll);

router.get("/:contactId", authenticate, isValidId, contactsCtrl.getById);

router.post(
  "/",
  authenticate,
  validateBody(contacts.contactsSchema),
  contactsCtrl.add
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(contacts.contactsSchema),
  contactsCtrl.updateById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(contacts.updateFavoriteSchema),
  contactsCtrl.updateFavorite
);
router.delete("/:contactId", authenticate, isValidId, contactsCtrl.deleteById);

module.exports = router;
