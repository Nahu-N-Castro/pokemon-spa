import axios from "axios";
import style from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import heart from "../../img/heart.svg";
import attack from "../../img/attack.svg";
import defense from "../../img/defense.svg";
import height from "../../img/height.svg";
import speed from "../../img/speed.svg";
import weight from "../../img/weight.svg";

const Detail = () => {
  const [pokemon, SetPokemon] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:3001/pokemons/${id}`).then(({ data }) => {
      if (data.name) {
        SetPokemon(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return SetPokemon({});
  }, [id]);



  return (
    <div className={style.detailPage}>
      <div className={style.content}>
        <div className={style.circle}></div>
        <img
          className={style.imgP}
          src={pokemon.image && pokemon.image}
          alt=""
        />
        <div className={style.about}>
          <h1>About</h1>
          <h2>{pokemon.name && pokemon.name}</h2>
        </div>
        <div className={style.statics}>
          <div className={style.statics1}>
            <img src={heart} alt="Ícono SVG" />
            <h5>Health</h5>
            <h1>{pokemon.health && pokemon.health}</h1>
          </div>
          <div className={style.statics1}>
            <img src={attack} alt="Ícono SVG" />
            <h5>Attack</h5>
            <h1>{pokemon.attack && pokemon.attack}</h1>
          </div>
          <div className={style.statics1}>
            <img src={defense} alt="Ícono SVG" />
            <h5>Defense</h5>
            <h1>{pokemon.defense && pokemon.defense}</h1>
          </div>
          <div className={style.statics1}>
            <img src={speed} alt="Ícono SVG" />
            <h5>Speed</h5>
            <h1>{pokemon.speed && pokemon.speed}</h1>
          </div>
          <div className={style.statics1}>
            <img src={height} alt="Ícono SVG" />
            <h5>Height</h5>
            <h1>{pokemon.height && pokemon.height}</h1>
          </div>
          <div className={style.statics1}>
            <img src={weight} alt="Ícono SVG" />
            <h5>Weight</h5>
            <h1>{pokemon.weight && pokemon.weight}</h1>
          </div>
          <div className={style.statics2}>
            {pokemon.type && pokemon.type.map((type, index) => (
              <h1 key={index}>{type}</h1>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
