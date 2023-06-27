const express = require("express");

const router = express.Router();

const { authCtrl } = require("../../controllers");

const { validateBody, authenticate, upload } = require("../../middlewares");

const { users } = require("../../schemas");

router.post(
  "/users/register",
  validateBody(users.registerSchema),
  authCtrl.register
);

router.post("/users/login", validateBody(users.loginSchema), authCtrl.login);

router.post("/users/logout", authenticate, authCtrl.logout);

router.get("/users/current", authenticate, authCtrl.getCurrent);

router.patch(
  "/users",
  validateBody(users.subscriptionCheckSchema),
  authenticate,
  authCtrl.updateSubscription
);

router.patch(
  "/users/avatars",
  authenticate,
  upload.single("avatar"),
  authCtrl.updateAvatar
);
module.exports = router;
