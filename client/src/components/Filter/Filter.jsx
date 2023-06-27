import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeSourcePokemons,
  filterPokemons,
  orderPokemons,
} from "../../redux/actions";
import filterImage from "../../img/filter.svg";
import style from "./Filter.module.css";

const FilterCards = () => {
  const dispatch = useDispatch();

  const [showFilters, setShowFilters] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedSource, setSelectedSource] = useState("API");

  useEffect(() => {
    dispatch(changeSourcePokemons(selectedSource));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSource]);

  const handleOrder = (event) => {
    setSelectedOrder(event.target.value);
  };

  const handleFilter = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleApply = () => {
    dispatch(orderPokemons(selectedOrder));
    dispatch(filterPokemons(selectedFilter));
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleChangePokemons = (event) => {
    setSelectedSource(event.target.value);
  };

  return (
    <div className={style.component}>
      <button className={style.button} onClick={toggleFilters}>
        <h5>Filters: </h5>
        <img className={style.buttonImg} src={filterImage} alt="filter" />
      </button>

      {showFilters && (
        <div className={style.filters}>
          <div>
            <label>Order by:</label>
            <select onChange={handleOrder}>
              <option value="">Default</option>
              <option value="A">Asc - Name</option>
              <option value="D">Desc - Name</option>
              <option value="B">Asc - Attack</option>
              <option value="E">Desc - Attack</option>
            </select>
          </div>

          <div>
            <label>Filter by type: </label>
            <select name="type" onChange={handleFilter}>
              <option value="">No Filter</option>
              <option value="Normal">Normal</option>
              <option value="Fighting">Fighting</option>
              <option value="Flying">Flying</option>
              <option value="Poison">Poison</option>
              <option value="Ground">Ground</option>
              <option value="Rock">Rock</option>
              <option value="Bug">Bug</option>
              <option value="Ghost">Ghost</option>
              <option value="Steel">Steel</option>
              <option value="Fire">Fire</option>
              <option value="Water">Water</option>
              <option value="Grass">Grass</option>
              <option value="Electric">Electric</option>
              <option value="Psychic">Psychic</option>
              <option value="Ice">Ice</option>
              <option value="Dragon">Dragon</option>
              <option value="Dark">Dark</option>
              <option value="Fairy">Fairy</option>
              <option value="Unknown">Unknown</option>
              <option value="Shadow">Shadow</option>
            </select>
          </div>

          <button className={style.apply} onClick={handleApply}>
            Apply
          </button>
        </div>
      )}

      <div>
        <form className={style.formSource}>
          <label htmlFor="apiOption"className={style.radioButton}>API</label>
          <input
            type="radio"
            id="apiOption"
            name="option"
            value="API"
            checked={selectedSource === "API"}
            onChange={handleChangePokemons}
          />
          <label htmlFor="dbOption" className={style.radioButton}>Data Base</label>
          <input
            type="radio"
            id="dbOption"
            name="option"
            value="DB"
            checked={selectedSource === "DB"}
            onChange={handleChangePokemons}
          />
        </form>
      </div>
    </div>
  );
};

export default FilterCards;
