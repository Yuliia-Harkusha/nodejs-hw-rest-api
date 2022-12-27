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
} = require("./user");

module.exports = {
  User,
  registerJoiSchema,
  loginJoiSchema,
  Contact,
  contactJoiSchema,
  updateFavoriteSchema,
  subscriptJoiSchema,
};
