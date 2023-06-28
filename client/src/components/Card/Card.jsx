/* eslint-disable react/prop-types */
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ pokemon }) => {
  const { id, name, type, image, created } = pokemon;

  return (
    <div className={style.content}>
      <Link className={style.link} to={`/detail/${id}`}>
        <h2 className={style.name}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h2>
        <img className={style.image} src={image} alt="" />
        <div className={style.circle}></div>
      </Link>
      {!created ? <h1 className={style.id}>#{id}</h1> : ""}
      <div className={style.types}>
        {!created
          ? type &&
            type.map((typeValue, index) => (
              <h2
                className={`${style.type} ${
                  style[`type-${typeValue.toLowerCase()}`]
                }`}
                key={index}>
                {typeValue}
              </h2>
            ))
          : type &&
          type.map((typeValue, index) => (
            <h2
              className={`${style.type} ${
                style[`type-${typeValue.name.toLowerCase()}`]
              }`}
              key={index}>
              {typeValue.name.charAt(0).toUpperCase() + typeValue.name.slice(1)}
            </h2>
            ))
          }
      </div>
    </div>
  );
};

export default Card;
