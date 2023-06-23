const { createPokemon } = require("../controllers/createPokemonController");

const createPokemonsHandler = async (req, res) => {
  const {
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
    type,
  } = req.body;

  try {
    const response = await createPokemon(
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
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createPokemonsHandler;
