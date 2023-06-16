import { NavLink} from "react-router-dom";
import style from "./NavBar.module.css"
// import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
    return(
        <div className={style.div}>
            {/* <SearchBar></SearchBar> */}
            <NavLink className={style.navButtons} to='/home'>Home</NavLink>
            <NavLink className={style.navButtons} to='/create'>Create a Pokémon</NavLink>
            <NavLink className={style.navButtons} to='/about'>Contact</NavLink>
        </div>

    );
}

export default NavBar;  