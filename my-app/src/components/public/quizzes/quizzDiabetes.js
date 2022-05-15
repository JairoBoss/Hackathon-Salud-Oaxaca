import Header from "../../Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { useState } from "react";
import { FullPageLoading } from "./pageLoading";

const QuizzDiabetes = ({ titulo }) => {
  const [value, setValue] = useState({
    edad: 0,
    imc: 0,
    cm: 0,
    ejercicio: 0,
    alimentacion: 0,
    medicamentos: 0,
    glucosa: 0,
    familiar: 0,
  });

  const [loading, setLoad] = useState(false);

  const calcular = () => {
    setLoad(true);
    //Calcular y entregar una card con recomendaciones y laboratorio
  };

  return (
    <>
      {loading ? (
        <FullPageLoading />
      ) : (
        <div className="page-content header-clear-medium">
          <Header titulo={"Examen Diabetes"} />
          <div className="card card-style">
            <img
              data-src="https://imagenes.elpais.com/resizer/1f6Qz0r2BsGyAgkaxvQ3L1fjso4=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/G3EGGCDKNRFBDC27SDXQLF53BQ.jpg"
              className="preload-img img-fluid bottom-20 entered loaded"
              data-ll-status="loaded"
              src="https://imagenes.elpais.com/resizer/1f6Qz0r2BsGyAgkaxvQ3L1fjso4=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/G3EGGCDKNRFBDC27SDXQLF53BQ.jpg"
            />
            <div className="content mb-0">
              <div className="float-start">
                <h1 className="mb-0">Cuestionario Diabetes</h1>
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
                La diabetes es una enfermedad que se presenta cuando el nivel de
                glucosa en la sangre, también conocido como azúcar en la sangre,
                es demasiado alto.
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
                        setValue({ ...value, edad: parseInt(e.target.value) })
                      }
                    >
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="Menor 45"
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
                        label="Mayor 64"
                      />
                    </RadioGroup>
                  </FormControl>
                </center>
              </div>
              <div className="divider mt-2 mb-2" />
            </div>

            <div className="content mb-0">
              <div className="float-start">
                <h2 className="mb-0">¿Cuál es tu IMC?</h2>
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
                      value={value.imc}
                      onChange={(e) =>
                        setValue({ ...value, imc: parseInt(e.target.value) })
                      }
                    >
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="<25"
                      />
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="25-30"
                      />
                      <FormControlLabel
                        value="3"
                        control={<Radio />}
                        label=">30"
                      />
                    </RadioGroup>
                  </FormControl>
                </center>
              </div>
              <div className="divider mt-2 mb-2" />
            </div>
            <div className="content mb-0">
              <div className="float-start">
                <h2 className="mb-0">¿Cuanto mide tu cintura (cm)?</h2>
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
                      value={value.cm}
                      onChange={(e) =>
                        setValue({ ...value, cm: parseInt(e.target.value) })
                      }
                    >
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="<80 cm"
                      />
                      <FormControlLabel
                        value="3"
                        control={<Radio />}
                        label="80-88 cm"
                      />
                      <FormControlLabel
                        value="4"
                        control={<Radio />}
                        label=">88 cm"
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
                  ¿Realizas al menos 30 minutos de ejercicio al día?
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
                      value={value.ejercicio}
                      onChange={(e) =>
                        setValue({
                          ...value,
                          ejercicio: parseInt(e.target.value),
                        })
                      }
                    >
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="Si"
                      />
                      <FormControlLabel
                        value="2"
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
                  ¿Come frutas, verduras y hortalizas a diario?
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
                      value={value.alimentacion}
                      onChange={(e) =>
                        setValue({
                          ...value,
                          alimentacion: parseInt(e.target.value),
                        })
                      }
                    >
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="Si"
                      />
                      <FormControlLabel
                        value="1"
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
                        value="2"
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
                  ¿Le han detectado niveles altos de azúcar (glucosa) en sangre?
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
                        value="5"
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
                  ¿Ha sabido algún diagnóstico de diabetes en su familia
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
                      value={value.familiar}
                      onChange={(e) =>
                        setValue({
                          ...value,
                          familiar: parseInt(e.target.value),
                        })
                      }
                    >
                      <FormControlLabel
                        value="5"
                        control={<Radio />}
                        label="Si (padres, hermanos o hijos)"
                      />
                      <FormControlLabel
                        value="3"
                        control={<Radio />}
                        label="Si (abuelos, tíos, primos)"
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
              <center>
                <Button variant="outlined" onClick={() => calcular()}>Calcular</Button>
              </center>
              <br />
            </div>
          </div>          
        </div>
      )}
    </>
  );
};
export default QuizzDiabetes;
