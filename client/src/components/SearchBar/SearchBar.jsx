import style from "./searchBar.module.css"
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getPokemonFinded } from "../../redux/actions";

const SearchBar=()=>{
    const dispatch = useDispatch()

    const [searchString,setSearchString] = useState()

    function handleOnSearch(event) {
        event.preventDefault()
        setSearchString(event.target.value)
    }
    
    function handleOnSubmit(event){ 
        event.preventDefault()
        dispatch(getPokemonFinded(searchString))
    }

    return (
        <div className={style.wrappedBar}>
            <form onSubmit={handleOnSubmit}>
                <input className={style.inputNav} placeholder="Search Name or ID..." type='search'onChange={handleOnSearch} /> 
                <button className={style.buttonNav}type='submit'>Search</button> 
            </form>
        </div>
    );
};
 
export default SearchBar;