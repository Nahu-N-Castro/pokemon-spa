const { Pokemon } = require("../db");

const createPokemon = async (
  id,
  name,
  image,
  health,
  attack,
  defense,
  speed,
  weight,
  height
) => {
  return await Pokemon.create({
    id,
    name,
    image,
    health,
    attack,
    defense,
    speed,
    weight,
    height,
  });
};

module.exports = { createPokemon };