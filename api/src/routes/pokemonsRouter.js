const express = require("express")
const pokemonsRouter = express.Router()

const getDetailHandler = require("../handlers/getDetailHandler");
const createPokemonsHandler = require("../handlers/getPokemonsHandler");

// pokemonsRouter.get("/", getPokemonsHandler);
pokemonsRouter.post("/", createPokemonsHandler)

pokemonsRouter.get("/:id", getDetailHandler);

module.exports = pokemonsRouter;
