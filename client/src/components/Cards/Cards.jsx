import axios from "axios";
import { useState, useEffect } from "react";
import style from "./Cards.module.css";
import Card from "../Card/Card";

const Cards = () => {
  const [pokemons, setPokemons] = useState([]);

  const [isLoading, setLoading] = useState(true)

  const getPokemons = async() => {
    await axios.get("http://localhost:3001/pokemons").then(({ data }) => {
      setPokemons(data);
      setLoading(false)      
    });
  };
  useEffect(() => {
    getPokemons()
  }, []);




  return (
    <div className={style.divMain}>
      {
        isLoading?<Card/>:
        pokemons.map(
        ({ id, name, image, type }) => 
          {
            return <Card key={id} id={id} name={name} image={image} type={type} />;
          }
        )
        
      }
    </div>
  );
};

export default Cards;
