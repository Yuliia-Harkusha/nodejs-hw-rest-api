const {
  Contact,
  contactJoiSchema,
  updateFavoriteSchema,
} = require("./contact");
const { User, registerJoiSchema, loginJoiSchema } = require("./user");

module.exports = {
  User,
  registerJoiSchema,
  loginJoiSchema,
  Contact,
  contactJoiSchema,
  updateFavoriteSchema,
};
