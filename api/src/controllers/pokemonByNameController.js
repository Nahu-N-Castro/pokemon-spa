const axios = require("axios");
const { Pokemon } = require("../db");
const { pokemonFiltered } = require("../utils");

const pokemonByName = async (name) => {
  try {
    const pokemonsDB = await Pokemon.findOne({
      where: {
        name: name,
      },
    });

    console.log(pokemonsDB)
    if (pokemonsDB == null) {
      const responseAPI = (
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        ).data;
        const responsePokemon = await pokemonFiltered(responseAPI);
        return responsePokemon;
      } else {
        return pokemonsDB;
      }
    } catch (error) {
    throw Error(`Error al buscar el Pokémon: ${name}`);
  }
};

module.exports = pokemonByName;
