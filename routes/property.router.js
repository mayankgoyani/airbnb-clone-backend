var express = require("express");
var router = express.Router();

const propertyController = require("../controllers/property.controller");

/* GET propertys listing. */
router.get("/", propertyController.getAllProperty);
router.post("/", propertyController.registerProperty);
router.put("/", propertyController.updateProperty);
router.get("/:propertyId", propertyController.getProperty);
router.delete("/:propertyId", propertyController.deleteProperty);

module.exports = router;
