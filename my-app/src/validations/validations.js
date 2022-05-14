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
