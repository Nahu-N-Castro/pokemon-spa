import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/navBar/navBar";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPokemons } from "../../redux/actions";

import "./home.module.css";

function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemons);

  useEffect(() => {
    // setLoading(false);
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div className="home">
      <NavBar />
      <Cards allPokemons={allPokemons} />
    </div>
  );
}

export default Home;
