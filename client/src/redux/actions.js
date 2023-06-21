import axios from "axios"

export const GET_POKEMONS = "GET_POKEMONS"
export const GET_POKEMONS_BY_NAME = "GET_POKEMONS_BY_NAME"
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL"
export const DELETE_POKEMON_DETAIL = "DELETE_POKEMON_DETAIL"

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