import axios from "axios"

export const GET_POKEMONS = "GET_POKEMONS"
export const GET_POKEMONS_BY_NAME = "GET_POKEMONS_BY_NAME"
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL"
export const GET_POKEMON_FINDED = "GET_POKEMON_FINDED"
export const DELETE_POKEMON_DETAIL = "DELETE_POKEMON_DETAIL"

export function getPokemons(page){
  return async function(dispatch){
    const response = await axios(`http://localhost:3001/pokemons?page=${page}&pageSize=12`)
    return dispatch({
      type:"GET_POKEMONS",
      payload: response.data
    })
  }
}

export function getPokemonsType(){
  return async function(){
    await axios.get("http://localhost:3001/types")
  }
}

export function getPokemonDetail(id){
  return async function(dispatch){
    const response = await axios(`http://localhost:3001/pokemons/${id}`)
    return dispatch({
      type:"GET_POKEMON_DETAIL",
      payload: response.data
    })
  }
}

export function deletePokemonDetail(){
  return function(dispatch){
    return dispatch({
      type:"DELETE_POKEMON_DETAIL",
    })
  }
}

export function getPokemonFinded(value){
  return async function(dispatch){
    let response
    if (isNaN(value)) {
      response = await axios(`http://localhost:3001/pokemons?name=${value}`)
    }else{
      response = await axios(`  http://localhost:3001/pokemons/${value}`)
    }
    return dispatch({
      type: "GET_POKEMON_FINDED",
      payload: response.data
    })
  }
}