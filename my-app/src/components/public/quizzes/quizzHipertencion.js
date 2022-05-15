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

const QuizzHipertencion = ({ titulo }) => {
  const [value, setValue] = useState({
    sistolica: 0,
    diastolica: 0,
  });

  const [loading, setLoad] = useState(false);
  const [component, setComponent] = useState(true);
  const [resultado, setResultado] = useState(false);
  const [suma, setSuma] = useState(0);

  const calcular = () => {
    setLoad(true);
    setComponent(false);
    setSuma(value.sistolica + value.diastolica);
    console.log(suma);

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
            <Header titulo={"Examen Presion Arterial"} />
            <div className="card card-style">
              <img
                data-src="https://imagenes.elpais.com/resizer/1f6Qz0r2BsGyAgkaxvQ3L1fjso4=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/G3EGGCDKNRFBDC27SDXQLF53BQ.jpg"
                className="preload-img img-fluid bottom-20 entered loaded"
                data-ll-status="loaded"
                src="https://imagenes.elpais.com/resizer/1f6Qz0r2BsGyAgkaxvQ3L1fjso4=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/G3EGGCDKNRFBDC27SDXQLF53BQ.jpg"
              />
              <div className="content mb-0">
                <div className="float-start">
                  <h1 className="mb-0">Cuestionario Presion Arterial</h1>
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
                  La presión arterial es la fuerza que la sangre ejerce contra
                  las paredes arteriales.
                </p>
                <div className="col-1"></div>
              </div>
            </div>
            <div className="card card-style">
              <div className="content mb-0">
                <div className="float-start">
                  <h2 className="mb-0">¿Cúál tu presion arterial sistólica?</h2>
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
                        value={value.sistolica}
                        onChange={(e) =>
                          setValue({ ...value, sistolica: parseInt(e.target.value) })
                        }
                      >
                        <FormControlLabel
                          value="0"
                          control={<Radio />}
                          label="Menos de 120"
                        />
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="120-129"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="130-139"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label="140-179"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label="Mas de 180"
                        />
                      </RadioGroup>
                    </FormControl>
                  </center>
                </div>
                <div className="divider mt-2 mb-2" />
              </div>

              <div className="content mb-0">
                <div className="float-start">
                  <h2 className="mb-0">¿Cúál tu presion arterial diastólica?</h2>
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
                        value={value.diastolica}
                        onChange={(e) =>
                          setValue({ ...value, diastolica: parseInt(e.target.value) })
                        }
                      >
                        <FormControlLabel
                          value="0"
                          control={<Radio />}
                          label="Menos de 80"
                        />
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label="80-89"
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label="Mas de 90"
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label="Mas de 120"
                        />
                      </RadioGroup>
                    </FormControl>
                  </center>
                </div>
                {/* <div className="divider mt-2 mb-2" /> */}
              </div>                            

              <div className="content mb-0">
                <center>
                  <Button variant="outlined" href="#" onClick={() => calcular()}>
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
export default QuizzHipertencion;

const Resultado = ({ puntaje }) => {
  // console.log(puntaje);
  const [color, setColor] = useState("black");
  const [mensaje, setMensaje] = useState("");
  useEffect(() => {
    if (puntaje == 0) {
      setColor("#21FF28");
      setMensaje("Tu presion arterial es normal");
    }
    if (puntaje == 1) {
      setColor("#ABCB07");
      setMensaje("Tu presion arterial esta elevada");
    }
    if (puntaje >= 2 && puntaje <= 6) {
      setColor("#FFE221");
      setMensaje("Tienes hipertensión arterial");
    }    
    if (puntaje > 6) {
      setColor("#FC1919");
      setMensaje("Tienes crisis hipertensiva");
    }
  }, []);
  return (
    <>
      <Header titulo={"Resultado"} />
      <div className="page-content header-clear-medium">
        <div class="card card-style">
          <div class="content">
            <h1>Resultado cuestionario Presion arterial</h1>
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
