/* eslint-disable react/prop-types */
import style from "./Cards.module.css";
import Card from "../Card/Card";


const Cards = ({ allPokemons }) => {
  const pokemonsList = allPokemons;
  return (
    <div className={style.divMain}>
      {pokemonsList?.map((pokemon) => {
        return <Card key={pokemon.id} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default Cards;
