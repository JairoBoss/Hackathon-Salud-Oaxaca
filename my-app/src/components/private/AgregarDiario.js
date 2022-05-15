import { Formik, Form, Field } from "formik";
import { useState, useEffect } from "react";
import { isEmpty } from "../../validations/validations";
import { toast } from "react-toastify";
import ImagenesService from "../../services/Imagenes.Service";
import PerfilMedicoService from "../../services/PerfilMedico.Service";
import EventoService from "../../services/Eventos.Services";

const AgregarDiario = () => {
    const [file, setFile] = useState("");
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState("");

    useEffect(() => {
        let user = localStorage.getItem("currentUser");
        setUser(JSON.parse(user));
    }, [])

    return (
        <div className="card card-style">
            <Formik
                initialValues={{
                    Nombre: "",
                    Descripcion: ""
                }}
                onSubmit={(values, { resetForm }) => {
                    if (file) {
                        ImagenesService.upload(file).then((response) => {
                            let data = {
                                Nombre: values.Nombre,
                                Descripcion: values.Descripcion,
                                Foto: response.result.data,
                                Fecha: new Date().toLocaleDateString()
                            }
                            let idEvento = "";
                            EventoService.create(data).then((response) => {
                                idEvento = response._id;
                                PerfilMedicoService.getByUserId(user._id).then((response) => {
                                    let arrEventos = response[0].Eventos;
                                    arrEventos.push(idEvento);
                                    let data = {
                                        Eventos: arrEventos
                                    }
                                    PerfilMedicoService.update(response[0]._id, data).then((response) => {
                                        toast.success("Diario agregado correctamente");
                                        setLoading(false);
                                        setFile("");
                                        resetForm();
                                    }).catch((error) => {
                                        toast.error(error.message);
                                    })

                                });
                            }).catch((error) => {
                                toast.error(error.message);
                            });
                        }).catch((error) => {
                            toast.error(error.message);
                        });
                    } else {
                        let data = {
                            Nombre: values.Nombre,
                            Descripcion: values.Descripcion,
                            Foto: "",
                            Fecha: new Date().toLocaleDateString()
                        }
                        let idEvento = "";
                        EventoService.create(data).then((response) => {
                            idEvento = response._id;
                            PerfilMedicoService.getByUserId(user._id).then((response) => {
                                let arrEventos = response[0].Eventos;
                                arrEventos.push(idEvento);
                                let data = {
                                    Eventos: arrEventos
                                }
                                PerfilMedicoService.update(response[0]._id, data).then((response) => {
                                    toast.success("Diario agregado correctamente");
                                    setLoading(false);
                                    setFile("");
                                    resetForm();
                                }).catch((error) => {
                                    toast.error(error.message);
                                })

                            });
                        }).catch((error) => {
                            toast.error(error.message);
                        });
                    }
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="content mb-0">
                            <div className="text-center mb-3">
                                <h2>Agregar a Diario</h2>
                                <p className="mb-4">
                                    Anota qué sucedió
                                </p>
                            </div>
                            <div className="input-style input-style-always-active has-borders has-icon">
                                <Field
                                    name="Nombre"
                                    type="name"
                                    className="form-control"
                                    validate={isEmpty}
                                />
                                <label
                                    htmlFor="Nombre"
                                    className={
                                        errors.Nombre && touched.Nombre
                                            ? "color-red-dark font-13"
                                            : "color-blue-dark font-13"
                                    }
                                >
                                    Nombre
                                </label>
                            </div>
                            <div className="input-style input-style-always-active has-borders has-icon">                                
                                <Field
                                    name="Descripcion"
                                    className="form-control"
                                    type="text"
                                    validate={isEmpty}
                                />
                                <label
                                    htmlFor="Descripcion"
                                    className={
                                        errors.Descripcion && touched.Descripcion
                                            ? "color-red-dark font-13"
                                            : "color-blue-dark font-13"
                                    }
                                >
                                    Descripcion
                                </label>

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

export default AgregarDiario;