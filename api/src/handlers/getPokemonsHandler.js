const { getAllPokemons } = require("../controllers/getPokemonsController");
const pokemonByName = require("../controllers/pokemonByNameController");


const getPokemonsHandler = async (req, res, next) => {
  const { name } = req.query;
  const nameLowerCase = name.toLowerCase();
  
  try {
    if (name) {
      const responseByName = await pokemonByName(nameLowerCase);
      res.status(200).json(responseByName);
    }else{
      const responseData = await getAllPokemons(req, res, next);
      return responseData;
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = getPokemonsHandler;
