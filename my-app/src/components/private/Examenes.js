import ReactDOM from "react-dom";
import BiometriaHematica from "./examenes/BiometriaHematica";
import QuimicaSanguinea from "./examenes/QuimicaSanguinea";
import EGO from "./examenes/EGO";
import { Formik, Form, Field } from "formik";
import { useState, useEffect } from "react";

const Examenes = () => {
    const [pantalla, setPantalla] = useState(0);
    const forms = [<BiometriaHematica />, <QuimicaSanguinea />, <EGO/>];

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
                                }} className="form-control">
                                    <option value="0" >Biometría hemática</option>
                                    <option value="1">Química sanguínea</option>
                                    <option value="2">EGO</option>
                                    {/* <option value="3">Hemoglobina glucosida</option> */}
                                </Field>
                                <label htmlFor="Sexo">Examen médico</label>
                            </div>

                        </Form>
                    )}
                </Formik>
                <section className="recent" id="mainDiv">
                    {forms[pantalla]}
                </section>
            </div>
        </div>
        </>
    );

}

export default Examenes;