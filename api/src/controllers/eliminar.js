// const axios = require('axios');

// const getAllPokemon = async (req, res, next) => {
//   try {
//     const page = parseInt(req.query.page) || 1;
//     const pageSize = parseInt(req.query.pageSize) || 12;

//     if (isNaN(page) || isNaN(pageSize) || page <= 0 || pageSize <= 0) {
//       throw new Error('Invalid page or pageSize');
//     }

//     const offset = (page - 1) * pageSize;
//     const limit = pageSize;
//     const apiUrl = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

//     const response = await axios.get(apiUrl);
//     const pokemonList = response.data.results;
//     const count = response.data.count;
//     const nextLink = response.data.next;
//     const prevLink = response.data.previous;

//     const pokemonDataPromises = pokemonList.map(pokemon => axios.get(pokemon.url));

//     const pokemonDataResponses = await axios.all(pokemonDataPromises);

//     const pokemonData = pokemonDataResponses.map(response => {
//       const { name, sprites, types } = response.data;
//       const imageUrl = sprites.front_default;
//       const pokemonTypes = types.map(typeData => typeData.type.name);
//       return { name, imageUrl, types: pokemonTypes };
//     });

//     const responseData = {
//       count,
//       next: nextLink,
//       previous: prevLink,
//       results: pokemonData
//     };

//     res.json(responseData);
//   } catch (error) {
//     next(error);
//   }
// };
//!!------------------ el buscador por nombre que creia que se deberia usar
  // url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=50"
  // const pokemonsDB = await Pokemon.findAll({
  //   where: {
  //     name: name,
  //   },
  // });

  // if(pokemonsDB.lenght){
  //   return pokemonsDB
  // }else{
  //   response = (await axios.get(url)).data
  //   while (response.next !== null) {
  //     arrPokemons = response.results
  //     const pokemonFound = arrPokemons.find((pokemon) => pokemon.name === name);

  //     if(pokemonFound) return pokemonFound.url;
  //     else{
  //       console.log("URL");
  //       url = response.next
  //     }
  //   }

  // }

  // throw Error (`No se encontró el pokemon ${name}` )



// module.exports = {
//   getAllPokemon
// };