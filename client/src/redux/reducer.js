import { GET_POKEMONS, GET_POKEMONS_BY_ID } from "./actions";

const initialState = { allPokemons: [], allPokemonsCopy: []};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
        allPokemonsCopy: action.payload
      };
    case GET_POKEMONS_BY_ID:
      return {
        ...state,
        allPokemons: action.payload,
        allPokemonsCopy: action.payload
      };


    default:
      return state;
  }
}

export default rootReducer;
