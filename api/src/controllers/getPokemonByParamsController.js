const axios = require("axios");
const { pokemonFiltered } = require("../utils/pokemonFiltered");

const getPokemonByParams = async (param) => {
  let response;

  if (isNaN(param)) {
    response = await axios.get(param);
  } else {
    response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${param}`);
  }

  const data = response.data;

  const pokemon = pokemonFiltered(data);

  return pokemon;
};

module.exports = { getPokemonByParams };
