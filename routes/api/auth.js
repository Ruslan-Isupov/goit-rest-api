const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/auth");

const { validateBody, authenticate } = require("../../middlewares");

const { users } = require("../../schemas");

router.post(
  "/users/register",
  validateBody(users.registerSchema),
  ctrl.register
);

router.post("/users/login", validateBody(users.loginSchema), ctrl.login);

router.post("/users/logout", authenticate, ctrl.logout);

router.get("/users/current", authenticate, ctrl.getCurrent);

// router.patch("/users", ctrl.subscriptionCheck);
module.exports = router;
