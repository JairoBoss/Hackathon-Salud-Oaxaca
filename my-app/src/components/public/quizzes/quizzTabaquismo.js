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
import { Input } from "@mui/material";

const QuizzTabaquismo = ({ titulo }) => {
  const [value, setValue] = useState({
    cigarros: 0,
    anos: 0,
  });

  const [loading, setLoad] = useState(false);
  const [component, setComponent] = useState(true);
  const [resultado, setResultado] = useState(false);
  const [suma, setSuma] = useState(0);

  const calcular = () => {
    setLoad(true);
    setComponent(false);
    console.log(value);
    let x = (value.cigarros * 20) / value.anos;
    setSuma(x);
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
            <Header titulo={"Examen Tabaquismo"} />
            <div className="card card-style">
              <img
                data-src="https://imagenes.elpais.com/resizer/1f6Qz0r2BsGyAgkaxvQ3L1fjso4=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/G3EGGCDKNRFBDC27SDXQLF53BQ.jpg"
                className="preload-img img-fluid bottom-20 entered loaded"
                data-ll-status="loaded"
                src="https://imagenes.elpais.com/resizer/1f6Qz0r2BsGyAgkaxvQ3L1fjso4=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/G3EGGCDKNRFBDC27SDXQLF53BQ.jpg"
              />
              <div className="content mb-0">
                <div className="float-start">
                  <h1 className="mb-0">Cuestionario Tabaquismo</h1>
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
                  <h2 className="mb-0">¿Cuantos cigarros fumas al dia?</h2>
                </div>
                <div className="clearfix" />
                <br />
                <div className="row">
                  <center>
                    <FormControl>
                      <Input
                        onChange={(e) =>
                          setValue({
                            ...value,
                            cigarros: parseInt(e.target.value),
                          })
                        }
                      />
                    </FormControl>
                  </center>
                </div>
                <div className="divider mt-2 mb-2" />
              </div>

              <div className="content mb-0">
                <div className="float-start">
                  <h2 className="mb-0">¿Por cuantos años has fumado?</h2>
                </div>
                <div className="clearfix" />
                <br />
                <div className="row">
                  <center>
                    <FormControl>
                      <Input
                        onChange={(e) =>
                          setValue({ ...value, anos: parseInt(e.target.value) })
                        }
                      />
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
export default QuizzTabaquismo;

const Resultado = ({ puntaje }) => {
  // console.log(puntaje);
  const [color, setColor] = useState("black");
  const [mensaje, setMensaje] = useState("");
  useEffect(() => {
    if (puntaje > 0 && puntaje <= 9) {
      setColor("#21FF28");
      setMensaje("Tiene probabilidad nula de tener taquismo");
    }
    if (puntaje >= 10 && puntaje <= 20) {
      setColor("#ABCB07");
      setMensaje("Tu nivel de tabaquismo es moderado");
    }
    if (puntaje >= 21 && puntaje <= 40) {
      setColor("#FFE221");
      setMensaje("Tu nivel de tabaquismo es intenso");
    }
    if (puntaje >= 40) {
      setColor("#FC1919");
      setMensaje("Tu nivel de tabaquismo es alto");
    }
  }, []);
  return (
    <>
      <Header titulo={"Resultado"} />
      <div className="page-content header-clear-medium">
        <div class="card card-style">
          <div class="content">
            <h1>Resultado cuestionario Tabaquismo</h1>
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
