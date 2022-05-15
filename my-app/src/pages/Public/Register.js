import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faUserTag,
  faUserTie,
  faEnvelope,
  faBuilding,
  faCircleXmark,
  faSquare,
  faCheckSquare,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";

import {
  isEmpty,
  isPositiveNumber,
  isValidEmail,
  isValidPhone,
} from "../../validations/validations";
import Header from "../../components/Header";
import UserService from "../../services/User.Service";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const [donador, setDonador] = useState(false);
  const [image, setImage] = useState(
    "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
  );

  const tiposSangre = ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"];
  const [arrAlergias, setArrAlergias] = useState([]);
  const { login } = useContext(AuthContext);

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
    <>
      <Header titulo={"Registrate"}></Header>
      <div className="page-content header-clear-medium">
        <Formik
          initialValues={{
            Imagen: image,
            Nombre: "",
            Apellido_Paterno: "",
            Apellido_Materno: "",
            Sexo: "",
            Telefono: "",
            Correo: "",
            Contraseña: "",
            Direccion: "",
            Fecha_Nacimiento: "",
            Lugar_Nacimiento: "",
            Donador: donador,
            Peso: 0,
            Altura: 0,
            Cintura: 0,
            Tipo_Sangre: "",
            Alergias: [],
          }}
          onSubmit={(values) => {
            values.Alergias = arrAlergias;
            console.log(values);
            UserService.create(values)
              .then((response) => {
                login(response.usuarioNuevo, response.token);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="card card-style">
                <div className="content mb-0">
                  <div className="footer card">
                    <h2 className="footer-title mb-2">Imagen de perfil</h2>
                    <div className="text-center mb-2">
                      <img
                        src={image}
                        data-src={image}
                        width={174}
                        className="rounded-circle mt- shadow-xl preload-img entered loaded"
                        data-ll-status="loaded"
                      />
                    </div>
                    <div className="file-data pb-5">
                      <input
                        type="file"
                        id="file-upload"
                        className="upload-file bg-highlight shadow-s rounded-s "
                        accept="image/*"
                        onChange={(e) => console.log(e.target.files[0])}
                      />
                      <p className="upload-file-text color-white">
                        Subir imagen
                      </p>
                    </div>
                  </div>
                  <div className="text-center mb-3">
                    <h2>Informaci&oacute;n b&aacute;sica</h2>
                    <p className="mb-4">
                      Ay&uacute;danos a conocer un poco m&aacute;s sobre ti
                    </p>
                  </div>

                  <div className="input-style input-style-always-active has-borders has-icon">
                    <i className="fa">
                      <FontAwesomeIcon icon={faUser} fontSize={12} />
                    </i>
                    <Field
                      name="Nombre"
                      className="form-control"
                      validate={isEmpty}
                    />
                    <label
                      htmlFor="Nombre"
                      className={
                        errors.Nombre && touched.Nombre
                          ? "color-red-dark font-13"
                          : "color-blue-dark font-13"
                      }
                    >
                      Nombre(s) *
                    </label>
                  </div>

                  <div className="input-style input-style-always-active has-borders has-icon">
                    <i className="fa">
                      <FontAwesomeIcon icon={faUserTie} fontSize={12} />
                    </i>
                    <Field name="Apellido_Paterno" className="form-control" />
                    <label
                      htmlFor="Apellido_Paterno"
                      className="color-blue-dark font-13"
                    >
                      Apellido paterno
                    </label>
                  </div>

                  <div className="input-style input-style-always-active has-borders has-icon">
                    <i className="fa">
                      <FontAwesomeIcon icon={faUserTag} fontSize={12} />
                    </i>
                    <Field name="Apellido_Materno" className="form-control" />
                    <label
                      htmlFor="Apellido_Materno"
                      className="color-blue-dark font-13"
                    >
                      Apellido materno
                    </label>
                  </div>
                  <div className="input-style input-style-always-active has-borders">
                    <Field name="Sexo" as="select" className="form-control">
                      <option value="default">Elige tu sexo</option>
                      <option value="M">Masculino</option>
                      <option value="F">Femenino</option>
                    </Field>
                    <label htmlFor="Sexo">Sexo *</label>
                  </div>
                  <div className="input-style input-style-always-active has-borders">
                    <Field
                      name="Fecha_Nacimiento"
                      type="date"
                      className="form-control"
                    />
                    <label
                      htmlFor="Fecha_Nacimiento"
                      className="color-blue-dark font-13"
                    >
                      Fecha de nacimiento
                    </label>
                  </div>
                  <div className="input-style input-style-always-active has-borders has-icon">
                    <i className="fa">
                      <FontAwesomeIcon icon={faBuilding} fontSize={12} />
                    </i>
                    <Field name="Lugar_Nacimiento" className="form-control" />
                    <label
                      htmlFor="Lugar_Nacimiento"
                      className="color-blue-dark font-13"
                    >
                      Lugar de nacimiento
                    </label>
                  </div>
                  <div className="input-style input-style-always-active has-borders has-icon">
                    <i className="fa">
                      <FontAwesomeIcon icon={faPhone} fontSize={12} />
                    </i>
                    <Field
                      name="Telefono"
                      className="form-control"
                      validate={isValidPhone}
                    />
                    <label
                      htmlFor="Telefono"
                      className={
                        errors.Telefono && touched.Telefono
                          ? "color-red-dark font-13"
                          : "color-blue-dark font-13"
                      }
                    >
                      Telefono
                    </label>
                  </div>
                  <div className="input-style input-style-always-active has-borders has-icon">
                    <i className="fa">
                      <FontAwesomeIcon icon={faEnvelope} fontSize={12} />
                    </i>
                    <Field
                      name="Correo"
                      className="form-control"
                      validate={isValidEmail}
                    />
                    <label
                      htmlFor="Correo"
                      className={
                        errors.Correo && touched.Correo
                          ? "color-red-dark font-13"
                          : "color-blue-dark font-13"
                      }
                    >
                      Correo *
                    </label>
                  </div>
                  <div className="input-style input-style-always-active has-borders has-icon">
                    <i className="fa">
                      <FontAwesomeIcon icon={faLockOpen} fontSize={12} />
                    </i>
                    <Field
                      name="Contraseña"
                      className="form-control"
                      validate={isEmpty}
                    />
                    <label
                      htmlFor="Contraseña"
                      className={
                        errors.Contraseña && touched.Contraseña
                          ? "color-red-dark font-13"
                          : "color-blue-dark font-13"
                      }
                    >
                      Contrase&ntilde;a *
                    </label>
                  </div>
                </div>
              </div>
              <div className="card card-style">
                <div className="content mb-0">
                  <div className="text-center mb-3">
                    <h2>Un vistazo a tu salud general</h2>
                    <p className="mb-4">
                      Atenci&oacute;n personalizada, s&oacute;lo para ti
                    </p>
                  </div>

                  <div className="input-style input-style-always-active has-borders">
                    <Field
                      name="Peso"
                      type="number"
                      className="form-control"
                      validate={isPositiveNumber}
                    />
                    <label
                      htmlFor="Peso"
                      className={
                        errors.Peso && touched.Peso
                          ? "color-red-dark font-13"
                          : "color-blue-dark font-13"
                      }
                    >
                      Peso (kg)
                    </label>
                    <em>kg</em>
                  </div>
                  <div className="input-style input-style-always-active has-borders">
                    <Field
                      name="Altura"
                      type="number"
                      className="form-control"
                      validate={isPositiveNumber}
                    />
                    <label
                      htmlFor="Altura"
                      className={
                        errors.Altura && touched.Altura
                          ? "color-red-dark font-13"
                          : "color-blue-dark font-13"
                      }
                    >
                      Altura (m)
                    </label>
                    <em>mts</em>
                  </div>
                  <div className="input-style input-style-always-active has-borders">
                    <Field
                      name="Cintura"
                      type="number"
                      className="form-control"
                      validate={isPositiveNumber}
                    />
                    <label
                      htmlFor="Cintura"
                      className={
                        errors.Cintura && touched.Cintura
                          ? "color-red-dark font-13"
                          : "color-blue-dark font-13"
                      }
                    >
                      Cintura (cm)
                    </label>
                    <em>cms</em>
                  </div>
                  <div className="input-style input-style-always-active has-borders">
                    <Field
                      name="Tipo_Sangre"
                      as="select"
                      className="form-control"
                    >
                      <option value="default" disabled>
                        Elige tu tipo de sangre
                      </option>
                      {tiposSangre.map((sangre, index) => {
                        return (
                          <option key={index} value={sangre}>
                            {sangre}
                          </option>
                        );
                      })}
                    </Field>
                    <label htmlFor="Tipo_Sangre">Tipo de sangre *</label>
                  </div>
                  <div className="form-check icon-check mb-4">
                    <Field
                      className="form-check-input"
                      type="checkbox"
                      name="Donador"
                      id="donatorCheck"
                    />
                    <label className="form-check-label" htmlFor="donatorCheck">
                      He sido donador de &oacute;rganos
                    </label>
                    <i className="icon-check-1 color-gray-dark">
                      <FontAwesomeIcon icon={faSquare} fontSize={15} />
                    </i>
                    <i className="icon-check-2 color-highlight">
                      <FontAwesomeIcon icon={faCheckSquare} fontSize={15} />
                    </i>
                  </div>
                  <div className="input-style input-style-always-active has-borders">
                    <input className="form-control mb-2" id="alergies" />
                    <label
                      htmlFor="alergies"
                      className="color-blue-dark font-13"
                    >
                      Alergia(s)
                    </label>
                    <a className="btn shadow-bg shadow-bg-m btn-m btn-full mb-3 rounded-s text-uppercase font-900 shadow-s bg-dark-dark">
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
                              <FontAwesomeIcon
                                icon={faCircleXmark}
                                color="red"
                              />
                            </i>
                            <strong className="color-white font-400">
                              {alergia}
                            </strong>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="content">
                <a className="btn btn-full font-900 text-uppercase bg-green-dark btn-m rounded-sm">
                  <button type="submit" width={"100%"}>
                    Completar registro
                  </button>
                </a>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Register;
