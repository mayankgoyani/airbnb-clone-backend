var express = require("express");
var router = express.Router();

const passport = require("passport");
const userAuth = passport.authenticate("jwt", { session: false });
const reservationController = require("../controllers/reservation.controller");

/* GET reservations listing. */
router.get("/", reservationController.getAllReservation);
router.get("/cancel/:reservationId", reservationController.cancelReservataion);
router.post("/", reservationController.addReservation);
router.put("/", reservationController.updateReservation);
router.get("/:reservationId", reservationController.getReservation);
router.delete("/:reservationId", reservationController.deleteReservation);

module.exports = router;
