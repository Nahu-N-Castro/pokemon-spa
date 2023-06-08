const { getPokemonById } = require("../controllers/getPokemonByIdController");


const getDetailHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const pokemonId = await getPokemonById(id);
    res.status(200).json(pokemonId);
  } catch (error) {
    if({error:error.message == "Request failed with status code 404"}){
      res.status(404).json("Request failed: Pokemons NOT found! (error 404)");
    }else{
      res.status(400).json({error:error.message})
    }
  }
};

module.exports = getDetailHandler;
