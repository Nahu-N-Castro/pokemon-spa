import style from "./landing.module.css";
import imglanding from "../../img/ash-landing.png";
import { NavLink } from "react-router-dom";

function Landing() {
  return (
    <div className={style.landing}>
      <div className={style.content}>
        <div className={style.circle1}></div>
        <div className={style.circle2}></div>
        <div className={style.circle3}></div>
        <div className={style.text}>
          <h1>Pokémon</h1>
          <h1>SPA</h1>
          <h1>My First Page</h1>
          <h5>Henrys individual integrative project </h5>
          <NavLink className={style.NavLink} activeStyle={style.NavLink.active} to='/home'>Sign In</NavLink>
        </div>
        <img src={imglanding} alt="POKEMON SPA" />
      </div>
    </div>
  );
}

export default Landing;
