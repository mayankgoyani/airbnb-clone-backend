var express = require("express");
var router = express.Router();

const serviceController = require("../controllers/service.controller");

/* GET services listing. */
router.get("/", serviceController.getAllService);
router.post("/", serviceController.registerService);
router.put("/", serviceController.updateService);
router.get("/:serviceId", serviceController.getService);
router.delete("/:serviceId", serviceController.deleteService);

module.exports = router;
