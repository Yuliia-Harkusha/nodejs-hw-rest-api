const { Schema, model } = require("mongoose");
const Joi = require("Joi");

const { handleMongooseError } = require("../helpers");

const userSchema = new Schema(
  {
    password: {
      type: String,
      minlegth: 6,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const registerJoiSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().valid("starter", "pro", "business"),
});

const loginJoiSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

const subscriptJoiSchema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business"),
});

const User = model("user", userSchema);

module.exports = {
  User,
  registerJoiSchema,
  loginJoiSchema,
  subscriptJoiSchema,
};
