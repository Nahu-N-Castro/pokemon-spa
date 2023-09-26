const axios = require("axios");
const { Pokemon, Type } = require("../db"); // Asumiendo que "Type" está en el mismo archivo que "Pokemon"
const { pokemonFiltered } = require("../utils/pokemonFiltered");

const pokemonByName = async (name) => {
  try {
    const responseAPI = (
      await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
      )
    ).data;

    const responsePokemon = await pokemonFiltered(responseAPI);

    if (responsePokemon == null) { // Corrección aquí
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

      if (!pokemonsDB) {
        throw Error(`No se encontró el Pokémon: ${name}`);
      }

      return pokemonsDB;

    } else {
      return responsePokemon;
    }
  } catch (error) {
    throw Error(`Error al buscar el Pokémon: ${name}. Detalle: ${error.message}`);
  }
};

module.exports = pokemonByName;
