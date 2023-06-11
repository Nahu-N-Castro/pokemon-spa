const express = require("express");
const typesRouter = express.Router()

const getTypesHandler = require("../handlers/getTypesHandler");

typesRouter.get("/", getTypesHandler);

module.exports = typesRouter