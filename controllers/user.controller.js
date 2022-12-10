const controller = {};
const userModel = require("../models/user");

const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const bcrypt = require("bcrypt");
const { token } = require("morgan");
const saltRounds = 10;

controller.protected = async (req, res, next) => {
  try {
    return res.status(200).json(req.user);
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

controller.registerUser = async (req, res, next) => {
  try {
    let password = "";
    bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
      if (err) {
        console.log(err);
        return;
      }
      password = hash;
      req.body.password = password;
      let user = new userModel(req.body);
      await user.save();
      return res.status(200).json({ message: "success", data: user });
    });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

controller.login = async (req, res, next) => {
  try {
    let emailId = req.body.emailId;
    let user = await userModel.findOne({ emailId: emailId });
    if (!user) {
      return res.status(400).json({ message: "failed", data: "no user found" });
    }
    let result = await bcrypt.compare(
      req.body.password,
      user.password,
      function (err, result) {
        if (err) {
          console.log(err);
          return false;
        }
        if (result) {
          // result == true
          let tokenObj = {
            _id: user._id,
            emailId: user.emailId,
          };
          // token = jwt.sign(tokenObj, SECRET, { expiresIn: "12h" });
          let token = jwt.sign(tokenObj, SECRET);

          return res.status(200).json({
            token: token,
            message: "success",
            emailId: user.emailId,
          });
        } else {
          return res.status(401).json({ message: "unauthorized" });
        }
      }
    );
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: e.message,
    });
  }
};
controller.getAllUser = async (req, res, next) => {
  try {
    let users = await userModel.find({});
    return res.status(200).json({ message: "success", data: users });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: e.message,
    });
  }
};

controller.getUser = async (req, res, next) => {
  try {
    let user = await userModel.find({ _id: req.params.userId });
    return res.status(200).json({ message: "success", data: user });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

controller.updateUser = async (req, res, next) => {
  try {
    let user = await userModel.findOneAndUpdate(
      { _id: req.params.userId },
      {
        $set: req.body,
      },
      {
        returnDocument: "after",
        upsert: true,
      }
    );
    return res.status(200).json({ message: "success", data: user });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};
controller.deleteUser = async (req, res, next) => {
  try {
    let user = await userModel.findOneAndUpdate(
      { _id: req.params.userId },
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
    return res.status(200).json({ message: "success", data: user });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};
module.exports = controller;
