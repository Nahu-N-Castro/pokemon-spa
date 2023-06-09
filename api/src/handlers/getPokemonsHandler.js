const { getAllPokemons } = require("../controllers/getPokemonsController");

const getPokemonsHandler = async (req, res, next) => {
  try {
    const responseData = await getAllPokemons(req, res, next);
    return responseData;
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = getPokemonsHandler;
