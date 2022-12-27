const {
  Contact,
  contactJoiSchema,
  updateFavoriteSchema,
} = require("../models");
const { HttpError } = require("../helpers");

const listContacts = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const { page = 1, limit = 5, favorite } = req.query;
    const skip = (page - 1) * limit;
    const result = await Contact.find(
      favorite ? { owner, favorite } : { owner },
      "",
      { skip, limit }
    ).populate("owner", "email subscription");
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getContactById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Contact.findById(id);

    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const addContact = async (req, res, next) => {
  try {
    const { error } = contactJoiSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const { _id: owner } = req.user;
    const result = await Contact.create({ ...req.body, owner });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const removeContact = async (req, res, next) => {
  try {
    const result = await Contact.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.json({ message: "Contact deleted" });
  } catch (error) {
    next(error);
  }
};

const updateContact = async (req, res, next) => {
  try {
    const { error } = contactJoiSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }

    const result = await Contact.findOneAndUpdate(
      {
        _id: req.params.id,
        owner: req.user._id,
      },
      req.body,
      { new: true }
    );
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const updateFavoriteStatus = async (req, res, next) => {
  try {
    const { error } = updateFavoriteSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }

    const { id } = req.params;

    const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateFavoriteStatus,
};
