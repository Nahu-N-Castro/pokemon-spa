require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const pokemonModel = require("./models/pokemonModel");
const typePokemonModel = require("./models/typePokemonModel");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false, native: false }
);

pokemonModel(sequelize);
typePokemonModel(sequelize);

const { Pokemon, Type } = sequelize.models;
Pokemon.belongsToMany(Type, { through: "pokemon_type" });
Type.belongsToMany(Pokemon, { through: "pokemon_type" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
