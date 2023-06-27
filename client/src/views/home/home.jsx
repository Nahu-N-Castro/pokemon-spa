import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/navBar/navBar";

import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";

import { deleteGetPokemon, getPokemons, getPokemonsType } from "../../redux/actions";

import style from "./home.module.css";

import Pagination from "../../components/Pagination/Pagination";
import FilterCards from "../../components/Filter/Filter";

function Home() {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    dispatch(getPokemons(page))
    dispatch(getPokemonsType());
    return () => {
      dispatch(deleteGetPokemon())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]
  );

  return (
    <div className={style.home}>
      <NavBar />
      <FilterCards/>
      <Cards />
      <Pagination
        page={page}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default Home;
