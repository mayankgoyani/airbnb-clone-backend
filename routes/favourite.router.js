var express = require("express");
var router = express.Router();

const favouriteController =
  require("../controllers/favourite.controller");

/* GET favourites listing. */
router.get("/", favouriteController.getAllFavourite);
router.post("/", favouriteController.registerFavourite);
router.put("/", favouriteController.updateFavourite);
router.get("/:favouriteId", favouriteController.getFavourite);
router.delete("/:favouriteId", favouriteController.deleteFavourite);

module.exports = router;
