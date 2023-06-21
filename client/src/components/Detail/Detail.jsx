import style from "./Detail.module.css";
import { useParams, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import heart from "../../img/heart.svg";
import attack from "../../img/attack.svg";
import defense from "../../img/defense.svg";
import height from "../../img/height.svg";
import speed from "../../img/speed.svg";
import weight from "../../img/weight.svg";
import { deletePokemonDetail, getPokemonDetail } from "../../redux/actions";
import back from "../../img/back.svg";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const pokemon = useSelector((state) => state.pokemonDetail);

  useEffect(() => {
    dispatch(getPokemonDetail(id));
    return () => {
      dispatch(deletePokemonDetail());
    };
  }, [dispatch, id]);

  return (
    <div className={style.detailPage}>
      <NavLink className={style.back} to="/home">
        <img src={back} alt="back" />
      </NavLink>
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
            {pokemon.type &&
              pokemon.type.map((type, index) => <h1 key={index}> {type} </h1>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
