const axios = require("axios");
const { Type } = require("../db");

const getTypesController = async (req, res) => {
  try {
    const countTable = await Type.count();

    if (countTable === 0) {
      const response = await axios.get("https://pokeapi.co/api/v2/type");
      const arrTypes = response.data.results;

      const typesToCreate = arrTypes.map((type) => ({ name: type.name }));
      await Type.bulkCreate(typesToCreate);

      const countTableCreated = await Type.count();
      if (countTableCreated === 0) {
        throw new Error("Hubo un error al crear los Types");
      }
    }

    return "Se crearon los Types correctamente!";
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = getTypesController;

