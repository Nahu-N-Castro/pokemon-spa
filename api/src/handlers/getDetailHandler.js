const {
  getPokemonByParams,
} = require("../controllers/getPokemonByParamsController");

const { Pokemon, Type } = require("../db");

const getDetailHandler = async (req, res) => {
  const { id } = req.params;

  try {
    if (id.length > 10) {
      const pokemonDB = await Pokemon.findByPk(id, {
        include: [
          {
            model: Type, 
            attributes: ["name"], 
            through: { attributes: [] }, // no incluyo atributos adicionales de la tabla de asociación en los resultados
            as: "type", 
          },
        ],
      });
      
      res.status(200).json(pokemonDB);
    } else {
      const pokemonId = await getPokemonByParams(id);
      res.status(200).json(pokemonId);
    }
  } catch (error) {
    if ({ error: error.message == "Request failed with status code 404" }) {
      res.status(404).json("Request failed: Pokemons NOT found! (error 404)");
    } else {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = getDetailHandler;
