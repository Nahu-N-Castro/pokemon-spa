import { NavLink} from "react-router-dom";
import style from "./NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../img/pokemon-logo.svg"

const NavBar = () => {
    return(
        <div className={style.div}>
            <NavLink to='/'><img src={logo} alt="pokemon" /></NavLink>
            <NavLink className={style.navButtons} to='/home'>HOME</NavLink>
            <NavLink className={style.navButtons} to='/create'>CREATE A POKEMON</NavLink>
            <NavLink className={style.navButtons} to='/about'>CONTACT</NavLink>
            <SearchBar />
        </div>

    );
}

export default NavBar;  