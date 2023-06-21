import {
  DELETE_POKEMON_DETAIL,
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  GET_POKEMON_FINDED,
} from "./actions";

const initialState = {
  allPokemons: [],
  allPokemonsCopy: [],
  pokemonDetail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
        allPokemonsCopy: action.payload,
      };
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        pokemonDetail: action.payload,
      };

    case GET_POKEMON_FINDED:
      return {
        ...state,
        allPokemons:[action.payload],
      };
    case DELETE_POKEMON_DETAIL:
      return {
        ...state,
        pokemonDetail: {},
      };

    default:
      return state;
  }
}

export default rootReducer;
