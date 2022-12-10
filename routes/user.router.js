var express = require("express");
var router = express.Router();

const userController = require("../controllers/user.controller");

/* GET users listing. */
router.get("/", userController.getAllUser);
router.post("/", userController.registerUser);
router.put("/", userController.updateUser);
router.get("/:userId", userController.getUser);
router.delete("/:userId", userController.deleteUser);

module.exports = router;
