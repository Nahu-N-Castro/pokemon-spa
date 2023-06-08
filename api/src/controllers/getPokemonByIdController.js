const axios = require("axios");
const pokemonFiltered = require("../utils/index");

const getPokemonById = async (param) => {
  if(isNaN(param)) {
    const dataURL = (await axios.get(param,{timeout: 15000})).data;
    const pokemonByURL = pokemonFiltered(dataURL);
    return pokemonByURL;
  } else {
    param.toString()
    const dataID = (
      await axios.get(`https://pokeapi.co/api/v2/pokemon/${param}`)
    ).data;
    const pokemonByID = pokemonFiltered(dataID);
    return pokemonByID;
  }
};

module.exports = { getPokemonById };
