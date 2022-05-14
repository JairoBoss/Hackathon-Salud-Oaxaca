import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faUserTag,
  faUserTie,
  faEnvelope,
  faCalendar,
  faBuilding,
  faPhotoFilm,
} from "@fortawesome/free-solid-svg-icons";

import {
  isEmpty,
  isValidEmail,
  isValidPhone,
} from "../../../validations/validations";

const Form1 = ({ setIndex }) => {
  const [image, setImage] = useState(
    "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
  );

  const transformToURL = (value) => {
    var reader = new FileReader();
    reader.readAsDataURL(value);
  };

  return (
    <div className="card card-style">
      <div className="content mb-0">
        <div className="footer card">
          <h2 className="footer-title mb-2">Imagen de perfil</h2>
          <div className="text-center mb-2">
            <img
              src={image}
              data-src={image}
              width={"60%"}
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
            <p className="upload-file-text color-white">Subir imagen</p>
          </div>
        </div>
        <div className="text-center mb-3">
          <h2>Informaci&oacute;n b&aacute;sica</h2>
          <p className="mb-4">
            Ay&uacute;danos a conocer un poco m&aacute;s sobre ti
          </p>
        </div>

        <Formik
          initialValues={{
            profile_picture: "",
            name: "",
            lastName: "",
            secondLastName: "",
            phone: "",
            email: "",
            address: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            setIndex(1);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="input-style input-style-always-active has-borders has-icon">
                <i className="fa">
                  <FontAwesomeIcon icon={faUser} fontSize={12} />
                </i>
                <Field
                  name="name"
                  className="form-control"
                  validate={isEmpty}
                />
                <label
                  htmlFor="name"
                  className={
                    errors.name && touched.name
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
                <Field
                  name="lastName"
                  className="form-control"
                  validate={isEmpty}
                />
                <label
                  htmlFor="lastName"
                  className={
                    errors.lastName && touched.lastName
                      ? "color-red-dark font-13"
                      : "color-blue-dark font-13"
                  }
                >
                  Apellido paterno *
                </label>
              </div>

              <div className="input-style input-style-always-active has-borders has-icon">
                <i className="fa">
                  <FontAwesomeIcon icon={faUserTag} fontSize={12} />
                </i>
                <Field
                  name="secondLastName"
                  className="form-control"
                  validate={isEmpty}
                />
                <label
                  htmlFor="secondLastName"
                  className={
                    errors.secondLastName && touched.secondLastName
                      ? "color-red-dark font-13"
                      : "color-blue-dark font-13"
                  }
                >
                  Apellido materno *
                </label>
              </div>
              <div className="input-style input-style-always-active has-borders has-icon">
                <i className="fa">
                  <FontAwesomeIcon icon={faPhone} fontSize={12} />
                </i>
                <Field
                  name="phone"
                  className="form-control"
                  validate={isValidPhone}
                />
                <label
                  htmlFor="phone"
                  className={
                    errors.phone && touched.phone
                      ? "color-red-dark font-13"
                      : "color-blue-dark font-13"
                  }
                >
                  Telefono *
                </label>
              </div>
              <div className="input-style input-style-always-active has-borders has-icon">
                <i className="fa">
                  <FontAwesomeIcon icon={faEnvelope} fontSize={12} />
                </i>
                <Field
                  name="email"
                  className="form-control"
                  validate={isValidEmail}
                />
                <label
                  htmlFor="email"
                  className={
                    errors.email && touched.email
                      ? "color-red-dark font-13"
                      : "color-blue-dark font-13"
                  }
                >
                  Correo *
                </label>
              </div>
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

export default Form1;
