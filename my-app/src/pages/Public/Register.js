import React from "react";

const Register = () => {
  return (
    <div className="card card-style">
      <div className="content mb-0">
        <h2>Basic Information</h2>
        <p className="mb-4">
          This contains basic profile fields, easily editable, set to disable or
          pre-populate with useful information.
        </p>
        <div className="input-style input-style-always-active has-borders has-icon validate-field">
          <i className="fa fa-user font-12" />
          <input
            type="name"
            className="form-control validate-name"
            id="f1"
            placeholder="Jackson Doe"
          />
          <label htmlFor="f1" className="color-blue-dark font-13">
            Nombre(s)
          </label>
          <i className="fa fa-times invalid color-red-dark disabled" />
          <i className="fa fa-check disabled valid color-green-dark" />
          <em>(required)</em>
        </div>
        <div className="input-style input-style-always-active has-borders has-icon validate-field mt-4">
          <i className="fa fa-at font-12" />
          <input
            type="email"
            className="form-control validate-name"
            id="f1a"
            placeholder="jack.doe@domain.com"
          />
          <label htmlFor="f1a" className="color-blue-dark font-13">
            Apellido paterno
          </label>
          <i className="fa fa-times disabled invalid color-red-dark" />
          <i className="fa fa-check disabled valid color-green-dark" />
          <em>(required)</em>
        </div>

        <div className="input-style input-style-always-active has-borders has-icon validate-field mt-4">
          <i className="fa fa-at font-12" />
          <input type="email" className="form-control validate-name" id="f1a" />
          <label htmlFor="f1a" className="color-blue-dark font-13">
            Apellido materno
          </label>
          <i className="fa fa-times disabled invalid color-red-dark" />
          <i className="fa fa-check disabled valid color-green-dark" />
          <em>(required)</em>
        </div>
        <div className="input-style input-style-always-active has-borders has-icon validate-field mt-4">
          <i className="fa fa-map-marker font-12" />
          <input type="text" className="form-control validate-name" id="f1a" />
          <label htmlFor="f1abc" className="color-blue-dark font-13">
            Sexo
          </label>
          <i className="fa fa-times disabled invalid color-red-dark" />
          <i className="fa fa-check disabled valid color-green-dark" />
          <em>(required)</em>
        </div>
        <div className="input-style input-style-always-active has-borders has-icon validate-field mt-4">
          <i className="fa fa-phone font-12" />
          <input
            type="tel"
            className="form-control validate-name"
            id="f1abcd"
            placeholder="+1 234 5678 9871"
          />
          <label htmlFor="f1abcd" className="color-blue-dark font-13">
            Telefono
          </label>
          <i className="fa fa-times disabled invalid color-red-dark" />
          <i className="fa fa-check disabled valid color-green-dark" />
          <em>(required)</em>
        </div>
        <div className="input-style input-style-always-active has-borders has-icon validate-field mt-4">
          <i className="fa fa-phone font-12" />
          <input
            type="email"
            className="form-control validate-name"
            id="f1abcd"
            placeholder="+1 234 5678 9871"
          />
          <label htmlFor="f1abcd" className="color-blue-dark font-13">
            Correo
          </label>
          <i className="fa fa-times disabled invalid color-red-dark" />
          <i className="fa fa-check disabled valid color-green-dark" />
          <em>(required)</em>
        </div>
        <a
          href="#"
          className="btn btn-full bg-green-dark btn-m text-uppercase rounded-sm shadow-l mb-3 mt-4 font-900"
        >
          Siguiente
        </a>
      </div>
    </div>
  );
};

export default Register;
