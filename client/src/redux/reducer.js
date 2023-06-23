import {
  DELETE_POKEMON_DETAIL,
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  GET_POKEMON_FINDED,
  FILTER_POKEMONS,
  ORDER_POKEMONS,

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
        allPokemons: [action.payload],
      };
    case DELETE_POKEMON_DETAIL:
      return {
        ...state,
        pokemonDetail: {},
      };

      case FILTER_POKEMONS:
        return {
          ...state,
          allPokemons: action.payload !== ""
            ? state.allPokemons.filter((poke) =>
                poke.type[0] === action.payload ||
                poke.type[1] === action.payload ||
                poke.type[2] === action.payload
              )
            : state.allPokemonsCopy,
        };

    case ORDER_POKEMONS:
      return {
        ...state,
        allPokemons:
        action.payload === "A"
        ? [...state.allPokemons].sort((a, b) => a.name.localeCompare(b.name))
        : action.payload === "D" ? [...state.allPokemons].sort((a, b) => b.name.localeCompare(a.name))
        : state.allPokemonsCopy,
      };
    default:
      return state;
  }
}

export default rootReducer;
