const axios = require("axios");

const getPokemonById = async (id) => {
  const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

  console.log(data)

  let pokemon = {
    id: data.id,
    name: data.name,
    image: data.sprites.other.dream_world.front_default,
    health: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    speed: data.stats[5].base_stat,
    height: data.height,
    weight: data.weight,
  };
  return pokemon
};

module.exports = {getPokemonById}