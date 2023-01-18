const {
  Contact,
  contactJoiSchema,
  updateFavoriteSchema,
} = require("./contact");
const {
  User,
  registerJoiSchema,
  loginJoiSchema,
  subscriptJoiSchema,
  emailJoiSchema,
} = require("./user");

module.exports = {
  User,
  registerJoiSchema,
  loginJoiSchema,
  emailJoiSchema,
  Contact,
  contactJoiSchema,
  updateFavoriteSchema,
  subscriptJoiSchema,
};
