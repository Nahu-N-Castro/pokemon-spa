import axios from "axios"

export const GET_POKEMONS = "GET_POKEMONS"
export const GET_POKEMONS_BY_NAME = "GET_POKEMONS_BY_NAME"
export const GET_POKEMONS_BY_ID = "GET_POKEMONS_BY_ID"

export function getPokemons(){
  return async function(dispatch){
    const response = await axios("http://localhost:3001/pokemons")
    return dispatch({
      type:"GET_POKEMONS",
      payload: response.data
    })
  }
}


export function getPokemonsByName(name){
  return async function(dispatch){
    const response = await axios(`http://localhost:3001/pokemons?name=${name}`)
    return dispatch({
      type:"GET_POKEMONS_BY_NAME",
      payload: response.data
    })
  }
}

export function getPokemonsById(id){
  return async function(dispatch){
    const response = await axios(`http://localhost:3001/pokemons/${id}`)
    return dispatch({
      type:"GET_POKEMONS_BY_ID",
      payload: response.data
    })
  }
}