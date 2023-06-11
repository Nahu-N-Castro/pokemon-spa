const express = require("express")
const mainRouter = express.Router()

const pokemonsRouter = require("./pokemonsRouter");

mainRouter.use("/pokemons", pokemonsRouter);

// mainRouter.use("/")


module.exports = mainRouter;

