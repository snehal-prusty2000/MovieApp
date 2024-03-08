const express = require("express")

const moviesController = require("./../Controlleer/moviesController")

const router = express.Router();


router.route("/")
    .get(moviesController.getAllMovie)
    .post(moviesController.createMovie)

router.route("/:id")
    .get(moviesController.getMovie)
    .patch(moviesController.updateMovie)
    .delete(moviesController.deleteMovie)

module.exports = router;    