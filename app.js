const express = require("express");

const moviesRouter = require("./Route/moviesRoute")

const app = express();

app.use(express.json());


//USING THE ROUTE 

app.use("/api/v1/movies", moviesRouter);

module.exports = app;