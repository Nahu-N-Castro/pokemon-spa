import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/navBar/navBar";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPokemons } from "../../redux/actions";

import style from "./home.module.css";

import Pagination from "../../components/Pagination/Pagination";
import FilterCards from "../../components/Filter/Filter";

function Home() {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const allPokemons = useSelector((state) => state.allPokemons);

  useEffect(() => {
    // setLoading(false)
    dispatch(getPokemons(page));
  }, [dispatch, page]);

  return (
    <div className={style.home}>
      <NavBar />
      <FilterCards/>
      <Cards allPokemons={allPokemons} />
      <Pagination
        page={page}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default Home;
