
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { isEmpty } from "../../../validations/validations";
import PreguntaService from "../../../services/Pregunta.Service";
import ExamenService from "../../../services/Examenes.Service";
import { toast } from "react-toastify";
import ImagenesService from "../../../services/Imagenes.Service";

const BiometriaHematica = () => {
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState("");

    return (
        <div className="card card-style">
            <Formik
                initialValues={{
                    Imagen: image,
                    Leucocitos: "",
                    Hemoglobina: "",
                    Plaquetas: "",
                    Fecha_Examen: ""
                }}
                onSubmit={(values, { resetForm }) => {
                    let pregunta1 = {
                        "Descripcion": "Leucocitos",
                        "Numero": values.Leucocitos
                    }

                    let pregunta2 = {
                        "Descripcion": "Hemoglobina",
                        "Numero": values.Hemoglobina
                    }

                    let pregunta3 = {
                        "Descripcion": "Plaquetas",
                        "Numero": values.Plaquetas
                    }

                    let id1 = "";
                    let id2 = "";
                    let id3 = "";
                    setLoading(true);
                    PreguntaService.create(pregunta1).then((response) => {
                        id1 = response._id;

                        PreguntaService.create(pregunta2).then((response2) => {
                            id2 = response2._id;
                            PreguntaService.create(pregunta3).then((response3) => {
                                id3 = response3._id;
                                let data = {
                                    Tipo: "Biometría hemática",
                                    Fecha: values.Fecha_Examen,
                                    Preguntas: [id1, id2, id3]
                                }
                                ExamenService.create(data).then((response) => {
                                    ImagenesService.upload(file).then((response2) => {
                                        toast.success("Examen agregado correctamente");
                                        setLoading(false);
                                        resetForm();    
                                    }).catch((error) => {
                                        toast.error("Error al subir foto");
                                    });                                    
                                }).catch((error) => {
                                    toast.error("Error");
                                })
                            })
                        }).catch((error) => {
                            console.log(error);
                        })
                    }).catch((error) => {
                        console.log(error);
                    });

                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="content mb-0">
                            <div className="text-center mb-3">
                                <h2>Biometría hemática</h2>
                                <p className="mb-4">
                                    Aquí puedes introducir tus resultados de tu Biometría Hemática
                                </p>
                            </div>
                            <div className="input-style input-style-always-active has-borders has-icon">
                                <Field
                                    name="Leucocitos"
                                    type="number"
                                    className="form-control"
                                    validate={isEmpty}                                    
                                />
                                <label
                                    htmlFor="Leucocitos"
                                    className={
                                        errors.Leucocitos && touched.Leucocitos
                                            ? "color-red-dark font-13"
                                            : "color-blue-dark font-13"
                                    }
                                >
                                    Leucocitos
                                </label>
                                <em>
                                    1 x 10^-3 / ml
                                </em>
                            </div>
                            <div className="input-style input-style-always-active has-borders has-icon">
                                <Field
                                    name="Hemoglobina"
                                    className="form-control"
                                    type="number"
                                    validate={isEmpty}
                                />
                                <label
                                    htmlFor="Hemoglobina"
                                    className={
                                        errors.Hemoglobina && touched.Hemoglobina
                                            ? "color-red-dark font-13"
                                            : "color-blue-dark font-13"
                                    }
                                >
                                    Hemoglobina
                                </label>
                                <em>
                                    g/dl
                                </em>
                            </div>
                            <div className="input-style input-style-always-active has-borders has-icon">
                                <Field
                                    name="Plaquetas"
                                    type="number"
                                    className="form-control"
                                    validate={isEmpty}
                                />
                                <label
                                    htmlFor="Plaquetas"
                                    className={
                                        errors.Plaquetas && touched.Plaquetas
                                            ? "color-red-dark font-13"
                                            : "color-blue-dark font-13"
                                    }
                                >
                                    Plaquetas
                                </label>
                                <em>
                                    1 x 10^-3 / ml
                                </em>
                            </div>
                            <div className="input-style input-style-always-active has-borders">
                                <Field
                                    name="Fecha_Examen"
                                    type="date"
                                    className="form-control"
                                    style={{ width: "100%" }}
                                />
                                <label
                                    htmlFor="Fecha_Examen"
                                    className="color-blue-dark font-13"
                                >
                                    Fecha de Examen
                                </label>
                            </div>
                            <h2 className="footer-title mb-2">Foto de estudio</h2>
                            <div className="text-center mb-2">
                                <img
                                    src={image}
                                    data-src={image}
                                    width={174}
                                    className="rounded-circle mt- shadow-xl preload-img entered loaded"
                                    data-ll-status="loaded"
                                />
                            </div>
                            {file ? (
                                <>
                                    <div style={{ textAlign: "center" }}>
                                        <img
                                            src={URL.createObjectURL(file)}
                                            style={{
                                                height: 200,
                                                width: 200,
                                                objectFit: "contain",
                                            }}
                                        />
                                    </div>
                                    <p>
                                        {file.name}
                                    </p>
                                </>
                            ) : null}
                            <div className="file-data pb-5">
                                <input
                                    type="file"
                                    id="file-upload"
                                    className="upload-file bg-highlight shadow-s rounded-s "
                                    accept="image/*"
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                                <p className="upload-file-text color-white">
                                    Subir imagen
                                </p>
                            </div>
                            <div className="content">
                                <a className="btn btn-full font-900 text-uppercase bg-green-dark btn-m rounded-sm">
                                    <button type="submit" disabled={loading} width={"100%"}>
                                        Subir
                                    </button>
                                </a>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div >
    );
}

export default BiometriaHematica;