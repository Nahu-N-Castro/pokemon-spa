const axios = require("axios");
const { Pokemon } = require("../db");
const { getPokemonByParams } = require("./getPokemonByParamsController");

const dataCleaner = async (data) => {
  try {
    const allPokemonsClean = [];
    for (const pokemon of data) {
      const pokemonInfo = await getPokemonByParams(pokemon.url);
      allPokemonsClean.push(pokemonInfo);
    }
    return allPokemonsClean;
  } catch (error) {
    throw error;
  }
};

const getAllPokemons = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 2;
    const pageSize = parseInt(req.query.pageSize) || 12;

    if (isNaN(page) || isNaN(pageSize) || page <= 0 || pageSize <= 0) {
      throw new Error("Invalid page or pageSize");
    }

    const offset = (page - 1) * pageSize;
    const limit = pageSize;
    const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    const infoApiResponse = (await axios.get(URL)).data;

    const pokemonsDB = await Pokemon.findAll();
    const pokemonsApi = await dataCleaner(infoApiResponse.results);
    const allPokemons = [...pokemonsDB, ...pokemonsApi];

    res.json(allPokemons);
  } catch (error) {
    next(error)
  }
};

module.exports = { getAllPokemons };
