const express = require("express")
const mainRouter = express.Router()

const pokemonsRouter = require("./pokemonsRouter");
const typesRouter = require("./typesRouter");

mainRouter.use("/pokemons", pokemonsRouter);

mainRouter.use("/types", typesRouter)


module.exports = mainRouter;

