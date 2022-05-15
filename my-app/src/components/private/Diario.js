import PerfilMedicoService from "../../services/PerfilMedico.Service";
import EventoService from "../../services/Eventos.Services";
import { useState, useEffect } from "react";
import ImagenesService from "../../services/Imagenes.Service";

const Diario = () => {
    const [perfil, setPerfil] = useState("");
    const [eventos, setEventos] = useState([]);
    // const [user, setUser] = useState("");

    useEffect(() => {
        let user = localStorage.getItem("currentUser");
        //setUser(JSON.parse(user));    
        getPerfil(JSON.parse(user));
    }, []);

    const getPerfil = async (user) => {
        PerfilMedicoService.getByUserId(user._id).then((response1) => {
            for (let i = 0; i < response1[0].Eventos.length; i++) {
                EventoService.get(response1[0].Eventos[i]).then((response2) => {
                    setEventos((eventos) => [...eventos, response2]);
                })
            }
        })
    }

    return (
        <div className="card card-style" style={{ marginTop: "10px" }}>
            <div className="d-flex content">
                <div className="flex-grow-1">
                    <h1 className="font-700 mb-1">Diario</h1>
                    <div className="content" >
                        <a
                            href="/agregarDiario"
                            className="btn btn-full btn-icon font-900 bg-blue-dark text-uppercase btn-m rounded-sm text-white"
                        >
                            Agregar Registro al Diario
                        </a>
                    </div>
                    {eventos && eventos.map((evento, index) => {

                        let url = "";

                        ImagenesService.get(evento.Foto).then((response)=>{
                            console.log(response);
                            url = response.result;
                        });                        

                        return (
                            <div className="content" key={index}>
                                <div style={{ textAlign: "center" }}>
                                    <img
                                        src={url}
                                        style={{
                                            height: 200,
                                            width: "100%",
                                            objectFit: "contain",
                                        }}
                                    />
                                </div>
                                <a
                                    className="btn btn-full btn-icon font-900 bg-green-dark text-uppercase btn-m rounded-sm text-white"
                                >
                                    {evento.Nombre} {new Date(evento.Fecha).toLocaleDateString()}
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Diario;