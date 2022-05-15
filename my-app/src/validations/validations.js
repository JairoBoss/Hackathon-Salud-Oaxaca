export const isEmpty = (value) => {
  let error;
  if (value === "") {
    error = "Campo requerido";
  }
  return error;
};

export const isValidEmail = (value) => {
  let error;
  if (
    value !== "" &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ) {
    error = "Dirección de correo inválida";
  }
  return error;
};

export const isValidPhone = (value) => {
  let error;
  if (value !== "" && !/^\d+$/.test(value)) {
    error = "Teléfono inválido";
  }
  return error;
};

export const isPositiveNumber = (value) => {
  return value < 0;
};

export const isValidURL = (str) => {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
};
