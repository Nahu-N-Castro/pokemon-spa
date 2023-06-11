const { getAllPokemons } = require("../controllers/getPokemonsController");
const pokemonByName = require("../controllers/pokemonByNameController");


const getPokemonsHandler = async (req, res, next) => {
  const { name } = req.query;

  try {
    if (name) {
      const responseByName = await pokemonByName(name);
      res.status(200).json(responseByName);
    }else{
      const responseData = await getAllPokemons(req, res, next);
      return responseData;
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = getPokemonsHandler;
