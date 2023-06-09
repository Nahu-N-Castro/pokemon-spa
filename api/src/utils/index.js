// const { getPokemonByParams } = require("../controllers/getPokemonByParamsController");

const pokemonFiltered = (data) => {
  pokeData = {
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
  return pokeData;
};


// const dataCleaner = async (data) => {
//   try {
//     const allPokemonsClean = [];
//     for (const pokemon of data) {
//       const pokemonInfo = await getPokemonByParams(pokemon.url);
//       allPokemonsClean.push(pokemonInfo);
//     }
//     return allPokemonsClean;
//   } catch (error) {
//     throw error;
//   }
// };

module.exports = { pokemonFiltered };
