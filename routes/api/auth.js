const express = require("express");
const router = express.Router();
const { authCtrl: ctrl } = require("../../controllers");
const { authenticate, upload } = require("../../middlewares");

router.post("/register", ctrl.register);

router.get("/verify/:verificationCode", ctrl.verify);

router.post("/verify", ctrl.resendVerifyEmail);

router.post("/login", ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.get("/logout", authenticate, ctrl.logout);

router.patch("/:id/subscript", authenticate, ctrl.updateSubscription);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
