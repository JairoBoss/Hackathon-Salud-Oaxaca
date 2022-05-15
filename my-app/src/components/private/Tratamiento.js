import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import MedicamentosService from "../../services/Medicamentos.Service";
import PerfilMedicoService from "../../services/PerfilMedico.Service";
import Header from "../Header";

import { Formik, Form, Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCapsules,
  faFilePrescription,
  faClock,
  faSquare,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";

import { isEmpty } from "../../validations/validations";

const Tratamiento = () => {
  const [meds, setMeds] = useState([]);
  const [file, setFile] = useState("");
  const [idFile, setIdFile] = useState("");
  const { currentUser } = useContext(AuthContext);

  const getMeds = () => {
    PerfilMedicoService.getByUserId(currentUser._id)
      .then((response) => {
        setIdFile(response[0]._id);
        var meds = response[0].Medicamentos;
        for (let i = 0; i < meds.length; i++) {
          MedicamentosService.get(meds[i])
            .then((medDesc) => {
              if (medDesc.Activo) setMeds((meds) => [...meds, medDesc]);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (meds.length === 0) getMeds();
  }, []);

  return (
    <>
      <Header titulo={"Tratamiento actual"}></Header>
      <div className="page-content header-clear-medium">
        <Formik
          initialValues={{
            Nombre: "",
            Dosis: "",
            Frecuencia: "",
            Foto: "",
            Activo: false,
          }}
          onSubmit={(values, actions) => {
            MedicamentosService.create(values)
              .then((response) => {
                var medFalse = meds;
                if (response.Activo) setMeds((meds) => [...meds, response]);

                medFalse.push(response);
                let user = {
                  Medicamentos: medFalse,
                };
                PerfilMedicoService.update(idFile, user)
                  .then((medAdded) => {
                    actions.resetForm();
                  })
                  .catch((error) => {
                    console.log(error);
                  });
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
                  <div className="text-center mb-3">
                    <h2>Agrega tus medicamentos</h2>
                    <p className="mb-4">Para cuidar de tu salud</p>
                  </div>

                  <div className="input-style input-style-always-active has-borders has-icon">
                    <i className="fa">
                      <FontAwesomeIcon icon={faCapsules} fontSize={12} />
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
                      <FontAwesomeIcon
                        icon={faFilePrescription}
                        fontSize={12}
                      />
                    </i>
                    <Field
                      name="Dosis"
                      className="form-control"
                      validate={isEmpty}
                    />
                    <label
                      htmlFor="Dosis"
                      className={
                        errors.Dosis && touched.Dosis
                          ? "color-red-dark font-13"
                          : "color-blue-dark font-13"
                      }
                    >
                      Dosis *
                    </label>
                  </div>

                  <div className="input-style input-style-always-active has-borders has-icon">
                    <i className="fa">
                      <FontAwesomeIcon icon={faClock} fontSize={12} />
                    </i>
                    <Field
                      name="Frecuencia"
                      className="form-control"
                      validate={isEmpty}
                    />
                    <label
                      htmlFor="Frecuencia"
                      className={
                        errors.Frecuencia && touched.Frecuencia
                          ? "color-red-dark font-13"
                          : "color-blue-dark font-13"
                      }
                    >
                      Frecuencia *
                    </label>
                  </div>
                  <div className="form-check icon-check mb-4">
                    <Field
                      className="form-check-input"
                      type="checkbox"
                      name="Activo"
                      id="donatorCheck"
                    />
                    <label className="form-check-label" htmlFor="donatorCheck">
                      Lo consumo actualmente
                    </label>
                    <i className="icon-check-1 color-gray-dark">
                      <FontAwesomeIcon icon={faSquare} fontSize={15} />
                    </i>
                    <i className="icon-check-2 color-highlight">
                      <FontAwesomeIcon icon={faCheckSquare} fontSize={15} />
                    </i>
                  </div>
                  <div className="file-data pb-5">
                    <input
                      type="file"
                      id="file-upload"
                      className="upload-file bg-green-dark shadow-s rounded-s"
                      accept="image/*"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                    <p className="upload-file-text color-white">
                      Agregar imagen
                    </p>
                  </div>
                  <a className="btn btn-full font-900 text-uppercase bg-blue-dark btn-m rounded-sm mb-3">
                    <button type="submit" width={"100%"}>
                      Agregar medicamento
                    </button>
                  </a>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <div className="calendar bg-theme shadow-xl rounded-m">
          <div className="cal-footer">
            <h6 className="cal-sub-title uppercase bold bg-highlight color-white">
              Medicamentos actuales
            </h6>
          </div>
          <div className="content">
            {meds &&
              meds.map((medicamento, index) => {
                return (
                  <div key={index} className="row justify-content-center">
                    <div className="col-3">
                      <img
                        src="https://m.media-amazon.com/images/I/81aylYdIRPL._AC_SL1500_.jpg"
                        className="rounded-s mx-auto mt-1"
                        width={65}
                      />
                    </div>
                    <div className="col-9 ps-0">
                      <h4>{medicamento.Nombre}</h4>
                      <p className="mt-n1 line-height-m">
                        Frecuencia: {medicamento.Frecuencia}
                        <br />
                        Dosis: {medicamento.Dosis}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tratamiento;
