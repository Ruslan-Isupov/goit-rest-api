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
router.get("/verify/:verificationCode", authCtrl.verify);
router.patch(
  "/users/avatars",
  authenticate,
  upload.single("avatar"),
  authCtrl.updateAvatar
);
router.post("/verify", validateBody(users.emailSchema), authCtrl.resendVerify);

module.exports = router;
