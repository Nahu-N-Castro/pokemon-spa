import { useState } from "react";
import style from "./create.module.css";
import heart from "../../img/heart.svg";
import attack from "../../img/attack.svg";
import defense from "../../img/defense.svg";
import height from "../../img/height.svg";
import speed from "../../img/speed.svg";
import weight from "../../img/weight.svg";
import unknow from "../../img/unknow.png";
import back from "../../img/back.svg";
import validate from "../../components/Validate/Validate";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Create = () => {


  const [statics, setStatics] = useState({
    name: "",
    image: "",
    health: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    weight: 0,
    height: 0,
    type: "",
  });

  const [errors, setErrors] = useState({error:"error"})

  const handleStaticsChange = (event) => {
    setStatics({
      ...statics,
      [event.target.name]: event.target.value,
    });
    setErrors(validate({
      ...statics,
      [event.target.name]: event.target.value,

    }))

  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const formData = {
      name: statics.name,
      image: statics.image,
      health: statics.health,
      attack: statics.attack,
      defense: statics.defense,
      speed: statics.speed,
      weight: statics.weight,
      height: statics.height,
      Type: {name: `${statics.type}`},
      created:true
    };
  
    axios.post("http://localhost:3001/pokemons", formData)
      .then((response) => {
        console.log("exito"+ response)
      })
      .catch((error) => {
        console.log(error)
        
      });
  };

  return (
    <div className={style.formPage}>
      <NavLink className={style.back} to="/home">
        <img className={style.backimg} src={back} alt="back" />
      </NavLink>
      <div className={style.form}>
        <form onSubmit={handleSubmit}>
          <div className={style.inputbox}>
            <label htmlFor="name">Name</label>
            <input
              name="name"
              value={statics.name}
              onChange={handleStaticsChange}></input>
              {errors.name && <h5 className={style.errmsg} >{errors.name}</h5>}
          </div>

          <div className={style.inputbox}>
            <label htmlFor="image">Image</label>
            <input
              name="image"
              value={statics.image}
              onChange={handleStaticsChange}></input>
              {errors.image && <h5 className={style.errmsg}>{errors.image}</h5>}
          </div>

          <div className={style.inputbox}>
            <label htmlFor="type">Type </label>
            <select name="type" onChange={handleStaticsChange}>
              <option value="">Select</option>
              <option value="normal">Normal</option>
              <option value="fighting">Fighting</option>
              <option value="flying">Flying</option>
              <option value="poison">Poison</option>
              <option value="ground">Ground</option>
              <option value="rock">Rock</option>
              <option value="bug">Bug</option>
              <option value="ghost">Ghost</option>
              <option value="steel">Steel</option>
              <option value="fire">Fire</option>
              <option value="water">Water</option>
              <option value="grass">Grass</option>
              <option value="electric">Electric</option>
              <option value="psychic">Psychic</option>
              <option value="ice">Ice</option>
              <option value="dragon">Dragon</option>
              <option value="dark">Dark</option>
              <option value="fairy">Fairy</option>
              <option value="unknown">Unknown</option>
              <option value="shadow">Shadow</option>
            </select>
            {errors.type && <h5 className={style.errmsg}>{errors.type}</h5>}
          </div>

          <div className={style.inputbox}>
            <label htmlFor="health">Health: </label>
            <output>{statics.health}</output>
            <input
              type="range"
              id="health"
              name="health"
              min="1"
              max="100"
              step="1"
              value={statics.health}
              onChange={handleStaticsChange}
            />
          </div>

          <div className={style.inputbox}>
            <label htmlFor="attack">Attack: </label>
            <output>{statics.attack}</output>
            <input
              type="range"
              id="attack"
              name="attack"
              min="1"
              max="100"
              step="1"
              value={statics.attack}
              onChange={handleStaticsChange}
            />
          </div>

          <div className={style.inputbox}>
            <label htmlFor="defense">Defense: </label>
            <output>{statics.defense}</output>
            <input
              type="range"
              id="defense"
              name="defense"
              min="1"
              max="100"
              step="1"
              value={statics.defense}
              onChange={handleStaticsChange}
            />
          </div>

          <div className={style.inputbox}>
            <label htmlFor="speed">Speed: </label>
            <output>{statics.speed}</output>
            <input
              type="range"
              id="speed"
              name="speed"
              min="1"
              max="100"
              step="1"
              value={statics.speed}
              onChange={handleStaticsChange}
            />
          </div>

          <div className={style.inputbox}>
            <label htmlFor="height">Height: </label>
            <output>{statics.height}</output>
            <input
              type="range"
              id="height"
              name="height"
              min="1"
              max="100"
              step="1"
              value={statics.height}
              onChange={handleStaticsChange}
            />
          </div>

          <div className={style.inputbox}>
            <label htmlFor="weight">Weight: </label>
            <output>{statics.weight}</output>
            <input
              type="range"
              id="weight"
              name="weight"
              min="1"
              max="1000"
              step="1"
              value={statics.weight}
              onChange={handleStaticsChange}
            />
          </div>
          {errors.statics && <h5 className={style.errmsg}>{errors.statics}</h5>}

          <button className={style.button} type="submit" disabled={Object.values(errors).some((error) => error !== "")}>
            CREATE POKEMON
          </button>
        </form>
      </div>

      <div className={style.card}>
        <div className={style.content}>
          <img
            className={style.imgP}
            src={statics.image ? statics.image : unknow}
            alt="newPokemon"
          />

          <div className={style.about}>
            <h1>About</h1>
            <h2>{statics.name && statics.name}</h2>
          </div>

          <div className={style.statics}>
            <div className={style.statics1}>
              <img src={heart} alt="Ícono SVG" />
              <h5>Health</h5>
              <h1>{statics.health && statics.health}</h1>
            </div>

            <div className={style.statics1}>
              <img src={attack} alt="Ícono SVG" />
              <h5>Attack</h5>
              <h1>{statics.attack && statics.attack}</h1>
            </div>

            <div className={style.statics1}>
              <img src={defense} alt="Ícono SVG" />
              <h5>Defense</h5>
              <h1>{statics.defense && statics.defense}</h1>
            </div>

            <div className={style.statics1}>
              <img src={speed} alt="Ícono SVG" />
              <h5>Speed</h5>
              <h1>{statics.speed && statics.speed}</h1>
            </div>

            <div className={style.statics1}>
              <img src={height} alt="Ícono SVG" />
              <h5>Height</h5>
              <h1>{statics.height && statics.height}</h1>
            </div>

            <div className={style.statics1}>
              <img src={weight} alt="Ícono SVG" />
              <h5>Weight</h5>
              <h1>{statics.weight && statics.weight}</h1>
            </div>

            <div className={style.statics2}>
              <h1>{statics.type.charAt(0).toUpperCase() + statics.type.slice(1)}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
