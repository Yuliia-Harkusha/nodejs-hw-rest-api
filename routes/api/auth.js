const express = require("express");
const router = express.Router();
const { authCtrl: ctrl } = require("../../controllers");
const { authenticate } = require("../../middlewares");

router.post("/register", ctrl.register);

router.post("/login", ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.get("/logout", authenticate, ctrl.logout);

router.patch("/:id/subscript", authenticate, ctrl.updateSubscription);

module.exports = router;
