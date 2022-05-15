import ReactDOM from "react-dom";
import BiometriaHematica from "./examenes/BiometriaHematica";
import { Formik, Form, Field } from "formik";
import { useState, useEffect } from "react";

const Examenes = () => {
    const [pantalla, setPantalla] = useState(1);

    useEffect(() =>{
        screen();
    }, [pantalla])

    const BH = () => {
        let mainDiv = document.getElementById("mainDiv");
        if (mainDiv) {
            if (mainDiv.children.length > 0) {
                ReactDOM.unmountComponentAtNode(mainDiv);
            }
            ReactDOM.render(<BiometriaHematica />, mainDiv);
        }
    };

    const screen = () => {
        if (pantalla == 1) {
            BH();
        }
    }

    return (
        <><div className="card card-style">
            <div className="content mb-0">
                <h2>Exámenes Médicos</h2>
                <p className="mb-4">
                    Aquí puedes agregar los resultados de tus Exámenes,
                </p>

                <Formik
                    initialValues={{
                        Tipo: "",
                    }}
                    onSubmit={(values) => {
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="input-style input-style-always-active has-borders">
                                <Field name="Tipo" as="select" value={pantalla} onChange={(e) => {
                                    setPantalla(e.target.value);
                                    screen()
                                }} className="form-control">
                                    <option value="1" >Biometría hemática</option>
                                    <option value="2">Química sanguínea</option>
                                    <option value="3">EGO</option>
                                    <option value="4">Hemoglobina glucosida</option>
                                </Field>
                                <label htmlFor="Sexo">Examen médico</label>
                            </div>

                        </Form>
                    )}
                </Formik>
                <section className="recent" id="mainDiv">

                </section>
            </div>
        </div>
        </>
    );

}

export default Examenes;