import { Formik, Form, Field } from "formik";
import { useState, useEffect } from "react";
import { isEmpty } from "../../../validations/validations";
import PreguntaService from "../../../services/Pregunta.Service";
import ExamenService from "../../../services/Examenes.Service";
import { toast } from "react-toastify";
import ImagenesService from "../../../services/Imagenes.Service";
import PerfilMedicoService from "../../../services/PerfilMedico.Service";

const QuimicaSanguinea = () => {
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState("");
    const [user, setUser] = useState("");

    useEffect(() => {
        let user = localStorage.getItem("currentUser");
        setUser(JSON.parse(user));
    }, [])

    return (
        <div className="card card-style">
            <Formik
                initialValues={{
                    Imagen: image,
                    Glucosa: "",
                    Creatinina: "",
                    Colesterol: "",
                    Trigliceridos: "",
                    Fecha_Examen: ""
                }}
                onSubmit={(values, { resetForm }) => {
                    let pregunta1 = {
                        "Descripcion": "Glucosa",
                        "Numero": values.Glucosa
                    }

                    let pregunta2 = {
                        "Descripcion": "Creatinina",
                        "Numero": values.Creatinina
                    }

                    let pregunta3 = {
                        "Descripcion": "Colesterol",
                        "Numero": values.Colesterol
                    }

                    let pregunta4 = {
                        "Descripcion": "Trigliceridos",
                        "Numero": values.Trigliceridos
                    }

                    let id1 = "";
                    let id2 = "";
                    let id3 = "";
                    let id4 = "";

                    setLoading(true);
                    PreguntaService.create(pregunta1).then((response) => {
                        id1 = response._id;

                        PreguntaService.create(pregunta2).then((response2) => {
                            id2 = response2._id;
                            PreguntaService.create(pregunta3).then((response3) => {
                                id3 = response3._id;
                                PreguntaService.create(pregunta3).then((response4) => {
                                    id4 = response4._id;
                                })
                                let data = {
                                    Tipo: "Química Sanguinea",
                                    Fecha: values.Fecha_Examen,
                                    Preguntas: [id1, id2, id3, id4]
                                }
                                ExamenService.create(data).then((response) => {
                                    if (file) {
                                        ImagenesService.upload(file).then((response2) => {
                                            PerfilMedicoService.getByUserId(user._id).then((response3) => {
                                                let docs = response3[0].Documentos;                                                
                                                docs.push(response2.result.data);
                                                console.log(docs);
                                                let data = {
                                                    Documentos: docs
                                                }
                                                PerfilMedicoService.update(response3[0]._id, data).then((response4) => {
                                                    toast.success("Examen agregado correctamente");
                                                    setLoading(false);
                                                    setFile("");
                                                    resetForm();
                                                }).catch((error) => {
                                                    toast.error(error.message);
                                                    setLoading(false);
                                                })
                                            })
                                        }).catch((error) => {
                                            toast.error("Error al subir foto");
                                        });
                                    } else {
                                        toast.success("Examen agregado correctamente");
                                        setFile("");
                                        setLoading(false);
                                        resetForm();
                                    }
                                }).catch((error) => {
                                    toast.error(error.message);
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
                                <h2>Química Sanguínea</h2>
                                <p className="mb-4">
                                    Aquí puedes introducir tus resultados de tu Química Sanguinea
                                </p>
                            </div>
                            <div className="input-style input-style-always-active has-borders has-icon">
                                <Field
                                    name="Glucosa"
                                    type="number"
                                    className="form-control"
                                    validate={isEmpty}
                                />
                                <label
                                    htmlFor="Glucosa"
                                    className={
                                        errors.Glucosa && touched.Glucosa
                                            ? "color-red-dark font-13"
                                            : "color-blue-dark font-13"
                                    }
                                >
                                    Glucosa
                                </label>
                                <em>
                                    1 x 10^-3 / ml
                                </em>
                            </div>
                            <div className="input-style input-style-always-active has-borders has-icon">
                                <Field
                                    name="Creatinina"
                                    className="form-control"
                                    type="number"
                                    validate={isEmpty}
                                />
                                <label
                                    htmlFor="Creatinina"
                                    className={
                                        errors.Creatinina && touched.Creatinina
                                            ? "color-red-dark font-13"
                                            : "color-blue-dark font-13"
                                    }
                                >
                                    Creatinina
                                </label>
                                <em>
                                    g/dl
                                </em>
                            </div>
                            <div className="input-style input-style-always-active has-borders has-icon">
                                <Field
                                    name="Colesterol"
                                    type="number"
                                    className="form-control"
                                    validate={isEmpty}
                                />
                                <label
                                    htmlFor="Colesterol"
                                    className={
                                        errors.Colesterol && touched.Colesterol
                                            ? "color-red-dark font-13"
                                            : "color-blue-dark font-13"
                                    }
                                >
                                    Colesterol
                                </label>
                                <em>
                                    1 x 10^-3 / ml
                                </em>
                            </div>
                            <div className="input-style input-style-always-active has-borders has-icon">
                                <Field
                                    name="Trigliceridos"
                                    type="number"
                                    className="form-control"
                                    validate={isEmpty}
                                />
                                <label
                                    htmlFor="Trigliceridos"
                                    className={
                                        errors.Trigliceridos && touched.Trigliceridos
                                            ? "color-red-dark font-13"
                                            : "color-blue-dark font-13"
                                    }
                                >
                                    Trigliceridos
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
                                                width: "100%",
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

export default QuimicaSanguinea;