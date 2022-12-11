const controller = {};
const propertyModel = require("../models/property");

controller.registerProperty = async (req, res, next) => {
  try {
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

controller.getAllProperty = async (req, res, next) => {
  try {
    let property = await propertyModel.find({});
    return res.status(200).json({ message: "success", data: property });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

controller.getProperty = async (req, res, next) => {
  try {
    let property = await propertyModel.findOne({ _id: req.params.propertyId });
    return res.status(200).json({ message: "success", data: property });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

controller.updateProperty = async (req, res, next) => {
  try {
    let property = await propertyModel.findOneAndUpdate(
      { _id: req.params.propertyId },
      {
        $set: req.body,
      },
      {
        returnDocument: "after",
        upsert: true,
      }
    );
    return res.status(200).json({ message: "success", data: property });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

controller.deleteProperty = async (req, res, next) => {
  try {
    let property = await propertyModel.findOneAndUpdate(
      { _id: req.params.propertyId },
      {
        $set: {
          deleted: true,
        },
      },
      {
        returnDocument: "after",
        upsert: true,
      }
    );
    return res.status(200).json({ message: "success", data: property });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};
module.exports = controller;
