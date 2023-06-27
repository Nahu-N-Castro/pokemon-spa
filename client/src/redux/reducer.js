import {
  DELETE_POKEMON_DETAIL,
  GET_POKEMONS,
  GET_POKEMON_DETAIL,
  GET_POKEMON_FINDED,
  FILTER_POKEMONS,
  ORDER_POKEMONS,
  DELETE_GET_POKEMON,
  CHANGE_SOURCE_POKEMONS,
  CHANGE_POKEMONS,
} from "./actions";

const initialState = {
  allPokemons: [],
  allPokemonsCopy: [],
  allPokemonsCopy2: [],
  pokemonDetail: {},
  source: "API",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
        allPokemonsCopy: action.payload,
        allPokemonsCopy2: action.payload,
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
    case DELETE_GET_POKEMON:
      return {
        ...state,
        allPokemons: [],
      };

    case ORDER_POKEMONS:
      return {
        ...state,
        allPokemons:
          action.payload === "A"
            ? [...state.allPokemons]?.sort((a, b) =>
                a.name && b.name ? a.name.localeCompare(b.name) : ""
              )
            : action.payload === "D"
            ? [...state.allPokemons]?.sort((a, b) =>
                a.name && b.name ? b.name.localeCompare(a.name) : ""
              )
            : action.payload === "B"
            ? [...state.allPokemons]?.sort((a, b) =>
                a.name && b.name ? b.attack - a.attack : ""
              )
            : action.payload === "E"
            ? [...state.allPokemons]?.sort((a, b) =>
                a.name && b.name ? a.attack - b.attack : ""
              )
            : [...state.allPokemonsCopy],
      };

    case FILTER_POKEMONS:
      return {
        ...state,
        allPokemons:
          action.payload !== ""
            ? state.allPokemons.filter(
                (poke) =>
                  poke.type && poke.type.some((type) => type === action.payload)
              )
            : state.allPokemons,
      };

    case CHANGE_SOURCE_POKEMONS:
      return {
        ...state,
        source: action.payload,
        allPokemons:
          action.payload === "API"
            ? [...state.allPokemonsCopy2].filter(
                (pokemons) => pokemons.created === false
              )
            : [...state.allPokemonsCopy2].filter(
                (pokemons) => pokemons.created === true
              ),
        allPokemonsCopy:
          action.payload === "API"
            ? [...state.allPokemonsCopy2].filter(
                (pokemons) => pokemons.created === false
              )
            : [...state.allPokemonsCopy2].filter(
                (pokemons) => pokemons.created === true
              ),
      };

    case CHANGE_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
        allPokemonsCopy: action.payload,
        allPokemonsCopy2: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
