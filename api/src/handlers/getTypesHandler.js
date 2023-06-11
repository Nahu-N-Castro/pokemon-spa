const getTypes = require("../controllers/getTypesController");

const getTypesHandler = async (req, res) => {
  try {
    const responseTypes = await getTypes();
    res.status(201).send(responseTypes);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getTypesHandler;
