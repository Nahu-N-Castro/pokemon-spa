import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterPokemons, orderPokemons } from "../../redux/actions";
import filterImage from "../../img/filter.svg";
import style from "./Filter.module.css";

const FilterCards = () => {
  const dispatch = useDispatch();

  const [showFilters, setShowFilters] = useState(false);

  const [selectedOrder, setSelectedOrder] = useState("");

  const [selectedFilter, setSelectedFilter] = useState("");

  const handleOrder = (event) => {
    setSelectedOrder(event.target.value);
  };

  const handleFilter = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleApply = () => {
    dispatch(filterPokemons(selectedFilter));
    dispatch(orderPokemons(selectedOrder));
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
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
              <option value="A">Ascending</option>
              <option value="D">Descencing</option>
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
    </div>
  );
};

export default FilterCards;
