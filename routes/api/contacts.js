const express = require("express");
const router = express.Router();
const { contacts: ctrl } = require("../../controllers");
const { authenticate } = require("../../middlewares");

router.get("/", authenticate, ctrl.listContacts);

router.get("/:id", authenticate, ctrl.getContactById);

router.post("/", authenticate, ctrl.addContact);

router.delete("/:id", authenticate, ctrl.removeContact);

router.put("/:id", authenticate, ctrl.updateContact);

router.patch("/:id/favorite", authenticate, ctrl.updateFavoriteStatus);

module.exports = router;
