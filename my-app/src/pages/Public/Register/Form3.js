import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import { isEmpty } from "../../../validations/validations";

const Form3 = ({ setIndex }) => {
  const tiposSangre = ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"];
  const [arrAlergias, setArrAlergias] = useState([]);

  const agregarAlergia = () => {
    let inputAl = document.getElementById("alergies");
    let value = inputAl.value;
    if (value && value !== "") {
      setArrAlergias((arrAlergias) => [...arrAlergias, value]);
      inputAl.value = "";
    }
  };

  const eliminarAlergia = (value) => {
    setArrAlergias(arrAlergias.filter((alergia) => alergia !== value));
  };

  useEffect(() => {}, [arrAlergias]);

  return (
    <div className="card card-style">
      <div className="content mb-0">
        <div className="text-center mb-3">
          <h2>Sobre tu salud general</h2>
          <p className="mb-4">Una atencion personalizada, solo para ti</p>
        </div>

        <Formik
          initialValues={{
            peso: 0,
            altura: 0,
            cintura: 0,
            sangre: "",
            alergias: arrAlergias,
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="input-style input-style-always-active has-borders">
                <Field
                  name="peso"
                  type="number"
                  className="form-control"
                  validate={isEmpty}
                />
                <label
                  htmlFor="peso"
                  className={
                    errors.peso && touched.peso
                      ? "color-red-dark font-13"
                      : "color-blue-dark font-13"
                  }
                >
                  Peso (kg) *
                </label>
                <em>kg</em>
              </div>
              <div className="input-style input-style-always-active has-borders">
                <Field
                  name="altura"
                  type="number"
                  className="form-control"
                  validate={isEmpty}
                />
                <label
                  htmlFor="altura"
                  className={
                    errors.altura && touched.altura
                      ? "color-red-dark font-13"
                      : "color-blue-dark font-13"
                  }
                >
                  Altura (m) *
                </label>
                <em>mts</em>
              </div>
              <div className="input-style input-style-always-active has-borders">
                <Field
                  name="cintura"
                  type="number"
                  className="form-control"
                  validate={isEmpty}
                />
                <label
                  htmlFor="cintura"
                  className={
                    errors.cintura && touched.cintura
                      ? "color-red-dark font-13"
                      : "color-blue-dark font-13"
                  }
                >
                  Cintura (cm) *
                </label>
                <em>cms</em>
              </div>
              <div className="input-style input-style-always-active has-borders">
                <Field
                  name="sangre"
                  as="select"
                  className="form-control"
                  validate={isEmpty}
                >
                  {tiposSangre.map((sangre, index) => {
                    return (
                      <option key={index} value={sangre}>
                        {sangre}
                      </option>
                    );
                  })}
                </Field>
                <label htmlFor="sangre">Tipo de sangre *</label>
              </div>
              <div className="input-style input-style-always-active has-borders">
                <input className="form-control mb-2" id="alergies" />
                <label htmlFor="alergies" className="color-blue-dark font-13">
                  Alergia(s)
                </label>
                <a class="btn shadow-bg shadow-bg-m btn-m btn-full mb-3 rounded-s text-uppercase font-900 shadow-s bg-dark-dark">
                  <button
                    style={{ width: "100%" }}
                    type="button"
                    onClick={() => agregarAlergia()}
                  >
                    Agregar alergia
                  </button>
                </a>

                <div>
                  {arrAlergias.map((alergia, index) => {
                    return (
                      <a
                        key={index}
                        onClick={() => eliminarAlergia(alergia)}
                        className="chip chip-small bg-teal-dark shadow-bg shadow-bg-s"
                      >
                        <i>
                          <FontAwesomeIcon icon={faCircleXmark} color="red" />
                        </i>
                        <strong className="color-white font-400">
                          {alergia}
                        </strong>
                      </a>
                    );
                  })}
                </div>
              </div>

              <a className="btn btn-full bg-red-dark btn-m text-uppercase rounded-sm shadow-l mb-3 mt-4 font-900">
                <button
                  type="button"
                  style={{ width: "100%" }}
                  onClick={() => setIndex(0)}
                >
                  Atr&aacute;s
                </button>
              </a>
              <a className="btn btn-full bg-green-dark btn-m text-uppercase rounded-sm shadow-l mb-3 mt-4 font-900">
                <button type="submit" style={{ width: "100%" }}>
                  Siguiente
                </button>
              </a>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Form3;
