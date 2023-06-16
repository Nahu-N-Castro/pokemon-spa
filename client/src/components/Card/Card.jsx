import style from "./Card.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ id, name, type, image }) => {
  return (
    <div className={style.content}>
      <Link className={style.link} to={`/detail/${id}`}>
        <h2 className={style.name}>{name}</h2>
        <img className={style.image} src={image} alt="" />
        <div className={style.circle}></div>
      </Link>
      <h1 className={style.id}>#{id}</h1>
      <div className={style.types}>
      {type &&
        type.map((typeValue, index) => (
          <h2
            className={`${style.type} ${style[`type-${typeValue.toLowerCase()}`]}`}
            key={index}
          >
            {typeValue}
          </h2>
        ))}
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  type: PropTypes.array,
  image: PropTypes.string,
};

export default Card;[]
