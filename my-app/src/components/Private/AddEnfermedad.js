import { useState, useEffect } from "react";
import DiseaseService from "../../services/Enfermedades.Service";
import PerfilMedicoService from "../../services/PerfilMedico.Service";
import { toast } from "react-toastify";

const AddEnfermedad = () => {
  const [detectionYear, setDetectionYear] = useState("");
  const [enfermedad, setEnfermedad] = useState("");
  const [enfermedades, setEnfermedades] = useState([]);
  const [perfil, setPerfil] = useState("");

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const ProfileResponse = await PerfilMedicoService.getByUserId(
      "628028d16b19388ded66f6be"
    );
    setPerfil(ProfileResponse[0]);
    getEnfermedades(ProfileResponse[0]);
  };

  const getEnfermedades = async (perfil) => {
    for (let i = 0; i < perfil.Enfermedades.length; i++) {
      const EnfermedadResponse = await DiseaseService.get(
        perfil.Enfermedades[i]
      );
      setEnfermedades((enfermedades) => [...enfermedades, EnfermedadResponse]);
    }
  };

  const onSubmit = async () => {
    if (detectionYear === "" || enfermedad === "") {
      toast.error("Introduzca todos los datos");
    } else {
      const datos = {
        Nombre: enfermedad,
        Fecha_Diagnostico: detectionYear,
      };

      DiseaseService.register(datos)
        .then((response) => {
          if (response) {
            console.log(response);
            setDetectionYear("");
            setEnfermedad("");
            let arrEnfermedades = perfil.Enfermedades;
            arrEnfermedades.push(response._id);
            let data = {
              Enfermedades: arrEnfermedades,
            };
            PerfilMedicoService.update(perfil._id, data)
              .then((response) => {
                toast.success("Éxito al ingresar la enfermedad");
              })
              .catch((err) => toast.error(err.message));
          }
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  };

  return (
    <>
      <div className="card card-style">
        <div className="content mb-0">
          <h2>Agregar enfermedad</h2>
          <p className="mb-4">
            Aquí puedes agregar alguna enfermedad que padezcas
          </p>
          <div className="input-style input-style-always-active has-borders has-icon validate-field">
            <input
              type="year"
              className="form-control validate-name"
              id="f1"
              placeholder="Año"
              required
              value={detectionYear}
              onChange={(e) => {
                setDetectionYear(e.target.value);
              }}
            />
            <label htmlFor="f1" className="color-blue-dark font-13">
              Año de detección
            </label>
            <em>(requerido)</em>
          </div>
          <div className="input-style input-style-always-active has-borders has-icon validate-field mt-4">
            <input
              type="name"
              className="form-control validate-name"
              id="f1a"
              placeholder="Introduzca la enfermedad aquí"
              value={enfermedad}
              onChange={(e) => {
                setEnfermedad(e.target.value);
              }}
            />
            <label htmlFor="f1a" className="color-blue-dark font-13">
              Nombre de Enfermedad
            </label>
            <em>(Requerido)</em>
          </div>

          <a
            onClick={onSubmit}
            className="btn btn-full bg-green-dark btn-m text-uppercase rounded-sm shadow-l mb-3 mt-4 font-900"
          >
            Guardar
          </a>
        </div>
      </div>
      <div className="card card-style" style={{ marginTop: "10px" }}>
        <div className="d-flex content">
          <div className="flex-grow-1">
            <h1 className="font-700 mb-1">Enfermedades</h1>
            {enfermedades.map((enfermedad, index) => {
              let date = new Date(enfermedad.Fecha_Diagnostico);
              let año = date.getFullYear();

              return (
                <div className="text-center mb-3">
                  <p
                    key={index + enfermedad.Nombre}
                    className="icon icon-xs rounded-sm shadow-l me-1"
                    style={{
                      width: "60%",
                      backgroundColor: "#8cc152",
                      color: "white",
                    }}
                  >
                    {enfermedad.Nombre}, Detectada el {año}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEnfermedad;
