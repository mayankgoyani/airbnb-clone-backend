const controller = {};
const favouriteModel = require("../models/favourite");

controller.addToFavourite = async (req, res, next) => {
  try {
    let favourite = new favouriteModel({
      user_id: req.user._id,
      property_id: req.body.propertyId,
    });
    favourite.save();
    return res.status(201).json({
      message: "success",
      data: favourite,
    });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

controller.getAllFavourite = async (req, res, next) => {
  try {
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

controller.getFavourite = async (req, res, next) => {
  try {
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

controller.updateFavourite = async (req, res, next) => {
  try {
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};
controller.deleteFavourite = async (req, res, next) => {
  try {
    let favourite = await favouriteModel.remove({ _id: req.params.favoriteId });
    return res.status(201).json({
      message: "success",
      data: favourite,
    });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};
module.exports = controller;
