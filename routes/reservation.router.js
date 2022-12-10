var express = require("express");
var router = express.Router();

const reservationController = require("../controllers/reservation.controller");

/* GET reservations listing. */
router.get("/", reservationController.getAllReservation);
router.post("/", reservationController.registerReservation);
router.put("/", reservationController.updateReservation);
router.get("/:reservationId", reservationController.getReservation);
router.delete("/:reservationId", reservationController.deleteReservation);

module.exports = router;
