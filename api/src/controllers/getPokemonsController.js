const axios = require("axios");
const { Pokemon } = require("../db");
const { getPokemonById } = require("./getPokemonByIdController");

const dataCleaner = async (data) => {
  try {
    const allPokemonsClean = [];
    for (const pokemon of data) {
      const pokemonInfo = await getPokemonById(pokemon.url);
      allPokemonsClean.push(pokemonInfo);
    }
    return allPokemonsClean;
  } catch (error) {
    throw error;
  }
};

const getPokemonsController = async () => {
  const infoApi = (
    await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
  ).data;
  const pokemonsDB = await Pokemon.findAll();
  const pokemonsApi = await dataCleaner(infoApi.results);

  return [...pokemonsDB, ...pokemonsApi];
};

module.exports = { getPokemonsController };
