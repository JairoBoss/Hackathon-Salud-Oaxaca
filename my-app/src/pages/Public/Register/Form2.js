import React from "react";
import { Formik, Form, Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faGlobe,
  faHashtag,
  faMapPin,
  faMapLocationDot,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";

import {
  isEmpty,
  isValidEmail,
  isValidPhone,
} from "../../../validations/validations";

const Form2 = ({ setIndex }) => {
  return (
    <div className="card card-style">
      <div className="content mb-0">
        <div className="text-center mb-3">
          <h2>Sobre tu origen</h2>
          <p className="mb-4">Nuestra m&aacute;xima prioridad eres t&uacute;</p>
        </div>

        <Formik
          initialValues={{
            birthday: "",
            place: "",
            street: "",
            city: "",
            state: "",
            postal: "",
            country: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            setIndex(2);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="input-style input-style-always-active has-borders">
                <Field
                  name="birthday"
                  type="date"
                  className="form-control"
                  validate={isEmpty}
                />
                <label
                  htmlFor="birthday"
                  className={
                    errors.birthday && touched.birthday
                      ? "color-red-dark font-13"
                      : "color-blue-dark font-13"
                  }
                >
                  Fecha de nacimiento *
                </label>
              </div>
              <div className="input-style input-style-always-active has-borders has-icon">
                <i className="fa">
                  <FontAwesomeIcon icon={faBuilding} fontSize={12} />
                </i>
                <Field
                  name="place"
                  className="form-control"
                  validate={isEmpty}
                />
                <label
                  htmlFor="place"
                  className={
                    errors.place && touched.place
                      ? "color-red-dark font-13"
                      : "color-blue-dark font-13"
                  }
                >
                  Lugar de nacimiento *
                </label>
              </div>
              <div className="text-center mb-3">
                <h2>Tu ubicaci&oacute;n actual</h2>
                <p className="mb-4">
                  La salud no conoce de l&iacute;mites territoriales
                </p>
              </div>

              <div className="input-style input-style-always-active has-borders has-icon">
                <i className="fa">
                  <FontAwesomeIcon icon={faRoad} fontSize={12} />
                </i>
                <Field
                  name="street"
                  className="form-control"
                  validate={isEmpty}
                />
                <label
                  htmlFor="street"
                  className={
                    errors.street && touched.street
                      ? "color-red-dark font-13"
                      : "color-blue-dark font-13"
                  }
                >
                  Calle *
                </label>
              </div>
              <div className="input-style input-style-always-active has-borders has-icon">
                <i className="fa">
                  <FontAwesomeIcon icon={faMapLocationDot} fontSize={12} />
                </i>
                <Field
                  name="city"
                  className="form-control"
                  validate={isEmpty}
                />
                <label
                  htmlFor="city"
                  className={
                    errors.city && touched.city
                      ? "color-red-dark font-13"
                      : "color-blue-dark font-13"
                  }
                >
                  Ciudad *
                </label>
              </div>
              <div className="input-style input-style-always-active has-borders has-icon">
                <i className="fa">
                  <FontAwesomeIcon icon={faMapPin} fontSize={12} />
                </i>
                <Field
                  name="state"
                  className="form-control"
                  validate={isEmpty}
                />
                <label
                  htmlFor="state"
                  className={
                    errors.state && touched.state
                      ? "color-red-dark font-13"
                      : "color-blue-dark font-13"
                  }
                >
                  Estado *
                </label>
              </div>
              <div className="input-style input-style-always-active has-borders has-icon">
                <i className="fa">
                  <FontAwesomeIcon icon={faHashtag} fontSize={12} />
                </i>
                <Field
                  name="postal"
                  className="form-control"
                  validate={isValidPhone}
                />
                <label
                  htmlFor="postal"
                  className={
                    errors.postal && touched.postal
                      ? "color-red-dark font-13"
                      : "color-blue-dark font-13"
                  }
                >
                  C&oacute;digo Postal *
                </label>
              </div>
              <div className="input-style input-style-always-active has-borders has-icon">
                <i className="fa">
                  <FontAwesomeIcon icon={faGlobe} fontSize={12} />
                </i>
                <Field
                  name="country"
                  className="form-control"
                  validate={isEmpty}
                />
                <label
                  htmlFor="country"
                  className={
                    errors.country && touched.country
                      ? "color-red-dark font-13"
                      : "color-blue-dark font-13"
                  }
                >
                  Pa&iacute;s *
                </label>
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

export default Form2;
