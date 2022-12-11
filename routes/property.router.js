var express = require("express");
var router = express.Router();

const propertyController = require("../controllers/property.controller");
const passport = require("passport");
const userAuth = passport.authenticate("jwt", { session: false });

/* GET propertys listing. */
router.get("/", propertyController.getAllProperty);
router.post("/", propertyController.registerProperty);
router.post("/review", propertyController.addReview);
router.get("/review/:propertyId", propertyController.getReviews);

router.put("/:propertyId", propertyController.updateProperty);
router.get("/:propertyId", propertyController.getProperty);
router.delete("/:propertyId", propertyController.deleteProperty);

module.exports = router;
