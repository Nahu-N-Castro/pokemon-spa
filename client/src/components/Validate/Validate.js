const validate = (statics) => {

  // "https://example.com/image.jpg"

  const REGEX = {
    name: /^[A-Za-z]{1,30}$/,
    image: /^(https?:\/\/)?\S+\.(jpg|jpeg|png|gif)$/i,
    statics: /^(?:[1-9][0-9]{0,2}|1000)$/,
  };

  const allowedTypes = [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
    "unknown",
    "shadow",
  ];

  const errors = {};

  if (!REGEX.name.test(statics.name)) {
    errors.name =
      "Nombre Incorrecto: No se permiten caracteres especiales ni símbolos, longitud debe estar entre 1 y 30 caracteres";
  }
  if (!REGEX.image.test(statics.image)) {
    errors.image =
      "Imagen Incorrecta: La URL debe tener una extensión de archivo como jpeg, jpg, png, gif y bmp.";
  }
  if (!REGEX.statics.test(statics.health)) {
    errors.health =
      "El número debe ser entre 1 y 1000 inclusive. Solo se permiten números enteros, sin decimales ni signos.";
  }
  if (!REGEX.statics.test(statics.attack)) {
    errors.attack =
      "El número debe ser entre 1 y 1000 inclusive. Solo se permiten números enteros, sin decimales ni signos.";
  }
  if (!REGEX.statics.test(statics.defense)) {
    errors.defense =
      "El número debe ser entre 1 y 1000 inclusive. Solo se permiten números enteros, sin decimales ni signos.";
  }
  if (!REGEX.statics.test(statics.speed)) {
    errors.speed =
      "El número debe ser entre 1 y 1000 inclusive. Solo se permiten números enteros, sin decimales ni signos.";
  }
  if (!REGEX.statics.test(statics.weight)) {
    errors.weight =
      "El número debe ser entre 1 y 1000 inclusive. Solo se permiten números enteros, sin decimales ni signos.";
  }
  if (!REGEX.statics.test(statics.height)) {
    errors.height =
      "El número debe ser entre 1 y 1000 inclusive. Solo se permiten números enteros, sin decimales ni signos.";
  }
  if (!allowedTypes.includes(statics.type)) {
    errors.type = "El tipo de pokémon es invaido";
  }

  return errors;
};

export default validate;
