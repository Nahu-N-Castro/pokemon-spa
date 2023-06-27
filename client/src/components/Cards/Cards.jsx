import style from "./Cards.module.css";
import Card from "../Card/Card";
import { useSelector} from "react-redux";
import { useEffect } from "react";
// import { changePokemons } from "../../redux/actions";

const Cards = () => {


  const allPokemons = useSelector((state) => state.allPokemons)
  const source = useSelector((state) => state.source);

  
  let filteredPokemons 
  
  if (source === "API") {
    filteredPokemons = allPokemons?.filter((pokemon) => !pokemon.created);
  } else {
    filteredPokemons = allPokemons?.filter((pokemon) => pokemon.created);
  }
  useEffect(() => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredPokemons,allPokemons]);

  
  return (
    <div className={style.divMain}>
      {filteredPokemons?.map((pokemon) => {
        return pokemon.id ? <Card key={pokemon.id} pokemon={pokemon} /> : null;
      })}
    </div>
  );
};

export default Cards;
