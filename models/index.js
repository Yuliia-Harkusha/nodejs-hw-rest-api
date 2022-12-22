const {
  Contact,
  contactJoiSchema,
  updateFavoriteSchema,
} = require("./contact");
const { User, registerJoiSchema, loginJoiSchema } = require("./user");

module.exports = {
  Contact,
  contactJoiSchema,
  updateFavoriteSchema,
  User,
  registerJoiSchema,
  loginJoiSchema,
};
