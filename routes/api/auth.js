const express = require("express");
const router = express.Router();
const { authCtrl: ctrl } = require("../../controllers");

router.post("/register", ctrl.register);

router.post("/login", ctrl.login);

module.exports = router;
