import { useState, useEffect } from "react";
import UserService from "../../services/User.Service";
import PerfilMedicoService from "../../services/PerfilMedico.Service";
import DiseaseService from "../../services/Enfermedades.Service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faEdit,
  faExclamation,
  faFilePrescription,
  faHandDots,
  faHeadSideCough,
  faPenToSquare,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";
import NoImage from "../../images/no-image-user.png";
import { isValidURL } from "../../validations/validations";

const Perfil = () => {
  const [IMC, setIMC] = useState(0.0);
  const [color, setColor] = useState("#28FF00");
  const [text, setText] = useState("null");
  const [icon, setIcon] = useState(faCircleExclamation);
  const [perfil, setPerfil] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    loadProfile();
        
  }, []);

  const loadProfile = async () => {
    let user = localStorage.getItem("currentUser");    
    let userJson = JSON.parse(user);
    const UserResponse = await UserService.get(userJson._id);
    setUser(UserResponse);
    let imc =
      UserResponse.Peso /
      ((UserResponse.Altura / 100) * (UserResponse.Altura / 100));
    setIMC(imc);
    divReturn(imc);
    const ProfileResponse = await PerfilMedicoService.getByUserId(
      UserResponse._id
    );

    setPerfil(ProfileResponse[0]);
  };

  function divReturn(imc) {
    if (imc < 18.5) {
      setColor("#A7EA20");
      setText("Peso bajo");
      setIcon(faSquareCheck);
    } else if (imc >= 18.5 && imc <= 24.9) {
      setColor("#A7EA20");
      setText("Peso normal");
      setIcon(faSquareCheck);
    } else if (imc >= 25 && imc <= 29.9) {
      setColor("#DCEA20");
      setText("Sobrepeso");
      setIcon(faExclamation);
    } else if (imc >= 30 && imc <= 34.9) {
      setColor("#FCFF00");
      setText("Obesidad leve");
      setIcon(faExclamation);
    } else if (imc >= 35 && imc <= 35.9) {
      setColor("#EE4F2F");
      setText("Obesidad moderada");
      setIcon(faCircleExclamation);
    } else if (imc >= 40) {
      setColor("#FF0000");
      setText("Obesidad mórbida");
      setIcon(faCircleExclamation);
    }
  }

  return (
    <>
      <Header titulo={"Mi Perfil"}></Header>
      <div className="page-content header-clear-medium">
        <div className="card card-style">
          <div className="d-flex content">
            <div className="flex-grow-1">
              <div>
                <h1 className="font-700 mb-1">
                  {user.Nombre + " " + user.Apellido_Paterno}
                </h1>
                <p className="mb-0 pb-1 pe-3">Correo: {user.Correo}</p>
                <p className="mb-0 pb-1 pe-3">Teléfono: {user.Telefono}</p>
                <p className="mb-0 pb-1 pe-3">
                  Tipo de sange: {user.Tipo_Sangre}
                </p>
              </div>
            </div>
            <div>
              <img
                src={isValidURL(user.Imagen) ? user.Imagen : NoImage}
                data-src={isValidURL(user.Imagen) ? user.Imagen : NoImage}
                width={100}
                className="rounded-circle mt- shadow-xl preload-img entered loaded"
                data-ll-status="loaded"
              />
            </div>
          </div>
        </div>
        <div className="card card-style">
          <div className="content mb-0">
            <div className="row mb-0">
              <div className="flex-grow-1">
                <h1 className="font-700 mb-1">Otros datos</h1>
                <p className="mb-0 pb-1 pe-3">
                  Fecha de Nacimiento:{" "}
                  {new Date(user.Fecha_Nacimiento).toLocaleDateString()}
                </p>
                <p className="mb-0 pb-1 pe-3">
                  Lugar de Nacimiento: {user.Lugar_Nacimiento}
                </p>
              </div>
            </div>
            <div className="divider mb-4 mt-3" />
            <div className="row mb-0 text-center">
              <div className="col-3">
                <p className="font-10 mb-0 pb-0">Altura</p>
                <h1 className="mb-n1">{user.Altura}</h1>
                <p className="font-10 mb-0 pb-0">mts</p>
              </div>
              <div className="col-3">
                <p className="font-10 mb-0 pb-0">Peso</p>
                <h1 className="mb-n1">{user.Peso}</h1>
                <p className="font-10 mb-0 pb-0">kgs</p>
              </div>
              <div className="col-3">
                <p className="font-10 mb-0 pb-0">Cintura</p>
                <h1 className="mb-n1">{user.Cintura}</h1>
                <p className="font-10 mb-0 pb-0">cms</p>
              </div>
              <div className="col-3">
                <p className="font-10 mb-0 pb-0">IMC</p>
                <h1 className="mb-n1">{IMC.toFixed(2)}</h1>
                <p className="font-10 mb-0 pb-0">
                  kg/m<sup>2</sup>
                </p>
              </div>
            </div>
            <div className="divider mb-4 mt-3" />
            <div className="row mb-0 pb-4">
              <div className="col-12">
                <a
                  type="button"
                  className="btn btn-full btn-icon font-900 text-uppercase btn-m rounded-sm text-white"
                  style={{ backgroundColor: color }}
                >
                  <i className="fa font-15 text-center">
                    <FontAwesomeIcon icon={icon} />
                  </i>
                  {text}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card card-style" style={{ marginTop: "10px" }}>
          <div className="d-flex content">
            <div className="flex-grow-1">
              <h1 className="font-700 mb-1">Alergias</h1>
              {user.Alergias &&
                user.Alergias.map((alergia, index) => (
                  <a key={index} className="chip chip-small bg-dark-dark">
                    <i className="fa bg-green-dark">
                      <FontAwesomeIcon icon={faHandDots} />
                    </i>
                    <span className="color-white">{alergia}</span>
                  </a>
                ))}
            </div>
          </div>
        </div>
        <div className="content">
          <a
            href="/enfermedades"
            className="btn btn-full btn-icon font-900 text-uppercase bg-brown-dark btn-m rounded-sm text-white"
          >
            <i className="fa font-15 text-center">
              <FontAwesomeIcon icon={faHeadSideCough} />
            </i>
            Enfermedades
          </a>
        </div>

        <div className="content">
          <a
            href="/estudios"
            className="btn btn-full btn-icon font-900 bg-blue-dark text-uppercase btn-m rounded-sm text-white"
          >
            <i className="fa font-15 text-center">
              <FontAwesomeIcon icon={faFilePrescription} />
            </i>
            Estudios médicos
          </a>
        </div>

        <div className="content">
          <a
            href="/editar-perfil"
            className="btn btn-full btn-icon font-900 bg-green-dark text-uppercase btn-m rounded-sm text-white"
          >
            <i className="fa font-15 text-center">
              <FontAwesomeIcon icon={faEdit} />
            </i>
            Editar perfil
          </a>
        </div>
      </div>
    </>
  );
};

export default Perfil;
