import Header from "../../Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMoneyBillWave,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { FullPageLoading } from "./pageLoading";
import React, { Component } from "react";
import ReactDOM from "react-dom";

const QuizzCardiovascular = ({ titulo }) => {
  const [value, setValue] = useState({
    edad: 0,
    genero: 0,
    diabetes: 0,
    fumas: 0,
    medicamentos: 0,
    glucosa: 0,
    colesterol: 0,
  });

  const [loading, setLoad] = useState(false);
  const [component, setComponent] = useState(true);
  const [resultado, setResultado] = useState(false);
  const [suma, setSuma] = useState(0);

  const calcular = () => {
    setLoad(true);
    setComponent(false);
    setSuma(
      value.edad +
        value.genero +
        value.diabetes +
        value.fumas +
        value.medicamentos +
        value.glucosa +
        value.colesterol
    );
    setResultado(true);
    setLoad(false);
    //Calcular y entregar una card con recomendaciones y laboratorio
    // setLoad(false);
  };

  return (
    <>
      {loading ? (
        <div id="examenaa">
          <FullPageLoading />
        </div>
      ) : null}
      {component ? (
        <div className="page-content header-clear-medium">
          <div id="examenaa">
            <Header titulo={"Riesgo Cardiovascular"} />
            <div className="card card-style">
              <img
                data-src="https://cardiavant.com/wp-content/uploads/riesgo.png"
                className="preload-img img-fluid bottom-20 entered loaded"
                data-ll-status="loaded"
                src="https://cardiavant.com/wp-content/uploads/riesgo.png"
              />
              <div className="content mb-0">
                <div className="float-start">
                  <h1 className="mb-0">Cuestionario Riesgo Cardiovascular</h1>
                </div>
                <div className="clearfix" />
                <div className="divider mt-2 mb-2" />
                <div className="row">
                  <div className="col-">
                    <strong className="color-theme"></strong>
                    <p className="font-12"></p>
                  </div>

                  <div className="col-4">
                    <strong className="color-theme">Tiempo:</strong>
                    <p className="font-12">
                      <i>
                        <FontAwesomeIcon icon={faClock} />
                      </i>{" "}
                      5 Minutos
                    </p>
                  </div>
                  <div className="col-4">
                    <strong className="color-theme">Precio:</strong>
                    <p className="font-12">
                      <i>
                        <FontAwesomeIcon icon={faMoneyBillWave} />
                      </i>{" "}
                      Gratis
                    </p>
                  </div>
                </div>
                <h5>Descripcion</h5>
                <p>
                  Las enfermedades cardiovasculares pueden manifestarse de
                  muchas formas: presión arterial alta, enfermedad arterial
                  coronaria, enfermedad valvular, accidente cerebrovascular y
                  arritmias (latidos irregulares).
                </p>
                <div className="col-1"></div>
              </div>
            </div>
            <div className="card card-style">
              <div className="content mb-0">
                <div className="float-start">
                  <h2 className="mb-0">¿Cúál es tu edad (años)?</h2>
                </div>
                <div className="clearfix" />
                <br />
                <div className="row">
                  <center>
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue="0"
                        value={value.edad}
                        onChange={(e) =>
                          setValue({
                            ...value,
                            edad: e.target.value,
                          })
                        }
                      >
                        <FormControlLabel
                          value="0"
                          control={<Radio />}
                          label="Menor 40"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="45-54"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label="55-64"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label="Mayor 75"
                        />
                      </RadioGroup>
                    </FormControl>
                  </center>
                </div>
                <div className="divider mt-2 mb-2" />
              </div>

              <div className="content mb-0">
                <div className="float-start">
                  <h2 className="mb-0">¿Cual es tu género?</h2>
                </div>
                <div className="clearfix" />
                <br />
                <div className="row">
                  <center>
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue="0"
                        value={value.genero}
                        onChange={(e) =>
                          setValue({
                            ...value,
                            genero: parseInt(e.target.value),
                          })
                        }
                      >
                        <FormControlLabel
                          value="0"
                          control={<Radio />}
                          label="Femenino"
                        />
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Masculino"
                        />
                      </RadioGroup>
                    </FormControl>
                  </center>
                </div>
                <div className="divider mt-2 mb-2" />
              </div>

              <div className="content mb-0">
                <div className="float-start">
                  <h2 className="mb-0">¿Padece diabetes?</h2>
                </div>
                <div className="clearfix" />
                <br />
                <div className="row">
                  <center>
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue="0"
                        value={value.diabetes}
                        onChange={(e) =>
                          setValue({
                            ...value,
                            diabetes: parseInt(e.target.value),
                          })
                        }
                      >
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Si"
                        />
                        <FormControlLabel
                          value="0"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </center>
                </div>
                <div className="divider mt-2 mb-2" />
              </div>

              <div className="content mb-0">
                <div className="float-start">
                  <h2 className="mb-0">¿Fumas?</h2>
                </div>
                <div className="clearfix" />
                <br />
                <div className="row">
                  <center>
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue="0"
                        value={value.fumas}
                        onChange={(e) =>
                          setValue({
                            ...value,
                            fumas: parseInt(e.target.value),
                          })
                        }
                      >
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Si"
                        />
                        <FormControlLabel
                          value="0"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </center>
                </div>
                <div className="divider mt-2 mb-2" />
              </div>

              <div className="content mb-0">
                <div className="float-start">
                  <h2 className="mb-0">
                    ¿Ha tomado o toma medicamentos para la presión arterial?
                  </h2>
                </div>
                <div className="clearfix" />
                <br />
                <div className="row">
                  <center>
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue="0"
                        value={value.medicamentos}
                        onChange={(e) =>
                          setValue({
                            ...value,
                            medicamentos: parseInt(e.target.value),
                          })
                        }
                      >
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Si"
                        />
                        <FormControlLabel
                          value="0"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </center>
                </div>
                <div className="divider mt-2 mb-2" />
              </div>

              <div className="content mb-0">
                <div className="float-start">
                  <h2 className="mb-0">
                    ¿Le han detectado niveles altos de azúcar (glucosa) en
                    sangre?
                  </h2>
                </div>
                <div className="clearfix" />
                <br />
                <div className="row">
                  <center>
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue="0"
                        value={value.glucosa}
                        onChange={(e) =>
                          setValue({
                            ...value,
                            glucosa: parseInt(e.target.value),
                          })
                        }
                      >
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Si"
                        />
                        <FormControlLabel
                          value="0"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </center>
                </div>
                <div className="divider mt-2 mb-2" />
              </div>

              <div className="content mb-0">
                <div className="float-start">
                  <h2 className="mb-0">¿Tiene el colesterol elevado?</h2>
                </div>
                <div className="clearfix" />
                <br />
                <div className="row">
                  <center>
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue="0"
                        value={value.colesterol}
                        onChange={(e) =>
                          setValue({
                            ...value,
                            colesterol: parseInt(e.target.value),
                          })
                        }
                      >
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="Si"
                        />
                        <FormControlLabel
                          value="0"
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </center>
                </div>
                {/* <div className="divider mt-2 mb-2" /> */}
              </div>

              <div className="content mb-0">
                <center>
                  <Button
                    variant="outlined"
                    href="#"
                    onClick={() => calcular()}
                  >
                    Calcular
                  </Button>
                </center>
                <br />
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {resultado ? <Resultado puntaje={suma} /> : null}
    </>
  );
};
export default QuizzCardiovascular;

const Resultado = ({ puntaje }) => {
  // console.log(puntaje);
  const [color, setColor] = useState("black");
  const [mensaje, setMensaje] = useState("");
  useEffect(() => {
    if (puntaje >= 0 && puntaje <= 2) {
      setColor("#21FF28");
      setMensaje("Tienes un riesgo bajo");
    }
    if (puntaje >= 3 && puntaje <= 4) {
      setColor("#ABCB07");
      setMensaje("Tienes un riesgo moderado");
    }
    if (puntaje >= 5 && puntaje <= 8) {
      setColor("#FFE221");
      setMensaje("Tienes un riesgo alto");
    }
    if (puntaje > 8) {
      setColor("#FC1919");
      setMensaje("Tienes un riesgo muy alto");
    }
  }, []);
  return (
    <>
      <Header titulo={"Resultado"} />
      <div className="page-content header-clear-medium">
        <div class="card card-style">
          <div class="content">
            <h1>Resultado cuestionario Cardiovascular</h1>
            <p />
            <p class="font-12 mt-n3 pt-1 mb-2" style={{ color: color }}>
              {mensaje}
            </p>
            <p style={{ marginBottom: "0px" }}>Te recomendamos:</p>
            <p>
              Hacerte los siguientes analisis en: Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div className="card card-style">
          <div
            className="card card-style mx-0 rounded-0 mb-0 preload-img entered loaded"
            data-src="https://cioinformacion.com/wp-content/uploads/2021/03/OSMO-OAXACA-394x218.jpeg"
            data-card-height={200}
            style={{
              height: 200,
              backgroundImage:
                'url("https://cioinformacion.com/wp-content/uploads/2021/03/OSMO-OAXACA-394x218.jpeg")',
            }}
            data-ll-status="loaded"
          >
            <div className="card-bottom ms-3 mb-3">
              <h1 className="color-white mb-0">Osmo</h1>
            </div>
            <div className="card-overlay bg-gradient rounded-0" />
          </div>
          <div className="content">
            <p style={{ marginBottom: "0px" }}>
              Clínica de especialidades e investigación
            </p>
            <a
              href="https://www.google.com/maps/dir//osmo+oaxaca/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x85c7223bbe3d113f:0xcfe9ff036942d7f3?sa=X&ved=2ahUKEwi2xbCZ4eH3AhU3IEQIHSbKBp8Q9Rd6BAhbEAU"
              className="color-theme font-12"
            >
              <i>
                <FontAwesomeIcon icon={faLocationDot} />
              </i>{" "}
              Ubicacion:{" "}
              <span className="color-highlight">Humboldt 302, Centro</span>
            </a>
            <br />
            <a href="#" className="color-theme font-12">
              <i>
                <FontAwesomeIcon icon={faMoneyBillWave} />
              </i>{" "}
              Precio: <span className="color-highlight">$ 0.0</span>
            </a>
            <br />
            <a href="#" className="color-theme font-12">
              <i>
                <FontAwesomeIcon icon={faClock} />
              </i>{" "}
              Horario:{" "}
              <span className="color-highlight">
                Lunes a Vieres 9:00 - 20:00
              </span>
            </a>
            <br />
          </div>
        </div>
        <div className="card card-style">
          <div
            className="card card-style mx-0 rounded-0 mb-0 preload-img entered loaded"
            data-src="https://cioinformacion.com/wp-content/uploads/2021/03/OSMO-OAXACA-394x218.jpeg"
            data-card-height={200}
            style={{
              height: 200,
              backgroundImage:
                'url("https://cioinformacion.com/wp-content/uploads/2021/03/OSMO-OAXACA-394x218.jpeg")',
            }}
            data-ll-status="loaded"
          >
            <div className="card-bottom ms-3 mb-3">
              <h1 className="color-white mb-0">Osmo</h1>
            </div>
            <div className="card-overlay bg-gradient rounded-0" />
          </div>
          <div className="content">
            <p style={{ marginBottom: "0px" }}>
              Clínica de especialidades e investigación
            </p>
            <a
              href="https://www.google.com/maps/dir//osmo+oaxaca/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x85c7223bbe3d113f:0xcfe9ff036942d7f3?sa=X&ved=2ahUKEwi2xbCZ4eH3AhU3IEQIHSbKBp8Q9Rd6BAhbEAU"
              className="color-theme font-12"
            >
              <i>
                <FontAwesomeIcon icon={faLocationDot} />
              </i>{" "}
              Ubicacion:{" "}
              <span className="color-highlight">Humboldt 302, Centro</span>
            </a>
            <br />
            <a href="#" className="color-theme font-12">
              <i>
                <FontAwesomeIcon icon={faMoneyBillWave} />
              </i>{" "}
              Precio: <span className="color-highlight">$ 0.0</span>
            </a>
            <br />
            <a href="#" className="color-theme font-12">
              <i>
                <FontAwesomeIcon icon={faClock} />
              </i>{" "}
              Horario:{" "}
              <span className="color-highlight">
                Lunes a Vieres 9:00 - 20:00
              </span>
            </a>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};
