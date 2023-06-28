const { Pokemon, Type } = require("../db");

const createPokemon = async (
  id,
  name,
  image,
  health,
  attack,
  defense,
  speed,
  weight,
  height,
  created,
  type
) => {
  name = name.toLowerCase();
  const pokemon = await Pokemon.create({
    id,
    name,
    image,
    health,
    attack,
    defense,
    speed,
    weight,
    height,
    created,
  });

  // console.log(type)

  // const idtype = 4

  const typeDB = await Type.findAll({ where: { name: type }});
  
  await pokemon.addType(typeDB);
  // console.log(pokemon)
  return pokemon;
};




module.exports = { createPokemon };
