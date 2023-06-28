const axios = require("axios");
const { Pokemon } = require("../db");
const { pokemonFiltered } = require("../utils/pokemonFiltered");

const pokemonByName = async (name) => {
  try {
    const pokemonsDB = await Pokemon.findOne({
      where: {
        name: name.toLowerCase(),
      },
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
        as: "type",
      },
    });

    console.log(pokemonsDB)

    if (pokemonsDB == null) {
      const responseAPI = (
        await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
        )
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
