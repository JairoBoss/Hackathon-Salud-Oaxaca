import { Formik, Form, Field } from "formik";
import { useState, useEffect } from "react";
import { isEmpty } from "../../../validations/validations";
import PreguntaService from "../../../services/Pregunta.Service";
import ExamenService from "../../../services/Examenes.Service";
import { toast } from "react-toastify";
import ImagenesService from "../../../services/Imagenes.Service";
import PerfilMedicoService from "../../../services/PerfilMedico.Service";


const EGO = () => {
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
                    Fecha_Examen: ""
                }}
                onSubmit={(values, { resetForm }) => {

                    setLoading(true);
                    if (file) {
                        let data = {
                            Tipo: "EGO",
                            Fecha: values.Fecha_Examen,
                            Preguntas: []
                        }
                        ExamenService.create(data).then((response) => {
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
                        }).catch((error) => {
                            toast.error(error.message);
                        })
                    } else {
                        toast.success("No ha agregado un examen EGO");
                        setLoading(false);
                    }

                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="content mb-0">
                            <div className="text-center mb-3">
                                <h2>EGO</h2>
                                <p className="mb-4">
                                    Aquí puedes introducir tus resultados de tu EGO
                                </p>
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
    )
}

export default EGO;