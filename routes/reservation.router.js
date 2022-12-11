var express = require("express");
var router = express.Router();

const passport = require("passport");
const userAuth = passport.authenticate("jwt", { session: false });
const reservationController = require("../controllers/reservation.controller");

/* GET reservations listing. */
router.get("/", userAuth, reservationController.getAllReservation);
router.get(
  "/cancel/:reservationId",
  userAuth,
  reservationController.cancelReservataion
);
router.post("/", userAuth, reservationController.addReservation);
router.put("/", userAuth, reservationController.updateReservation);
router.get("/:reservationId", userAuth, reservationController.getReservation);
router.delete(
  "/:reservationId",
  userAuth,
  reservationController.deleteReservation
);

module.exports = router;
