const axios = require("axios");
const { Pokemon, Type } = require("../db");
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
    const page = parseInt(req.query.page) || 1;

    const pageSize = parseInt(req.query.pageSize) || 12;

    if (isNaN(page) || isNaN(pageSize) || page <= 0 || pageSize <= 0) {
      throw new Error("Invalid page or pageSize");
    }

    const pokemonsDB = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ["name"], 
        through: {
          attributes: [], // No incluyo atributos adicionales 
        },
        as: "type",
      },
    });

    const counterPokemonsDB = pokemonsDB.length;

    offset = (page - 1) * pageSize;
    limit = pageSize;

    const URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    const response = await axios.get(URL);
    const infoApiResponse = response.data.results;

    const pokemonsApi = await dataCleaner(infoApiResponse);

    let allPokemons = [
      ...pokemonsDB,
      ...pokemonsApi,
      {
        countPokemonsDB: counterPokemonsDB,
        countPokemonsAPI: response.data.count,
      },
    ];

    res.json(allPokemons);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllPokemons };
