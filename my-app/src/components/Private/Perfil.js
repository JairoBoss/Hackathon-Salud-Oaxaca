import { useState, useEffect } from "react";
import UserService from "../../Services/User.Service";
import PerfilMedicoService from "../../Services/PerfilMedico.Service";
import DiseaseService from "../../Services/Enfermedades.Service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";



const Perfil = () => {
    const [IMC, setIMC] = useState("");
    const [color, setColor] = useState("#28FF00");
    const [text, setText] = useState("null");
    const [perfil, setPerfil] = useState("");
    const [enfermedades, setEnfermedades] = useState([]);
    const [user, setUser] = useState("");

    useEffect(() => {

        UserService.get("627efe5911ed44bc677b870e").then(response => {
            setUser(response);
            let imc = response.Peso / ((response.Altura / 100) * (response.Altura / 100));
            setIMC(imc);
            divReturn(imc);
            PerfilMedicoService.getByUserId(response._id).then((response2) => {
                setPerfil(response2[0]);
                for (let i = 0; i < response2[0].Enfermedades.length; i++) {                    
                    DiseaseService.get(response2[0].Enfermedades[i]).then((response4) => {                        
                        enfermedades.push(response4);
                        
                    })
                }
            })
        });
    }, [])

    function divReturn(imc) {
        if (imc < 18.5) {
            setColor("#A7EA20");
            setText("Peso bajo");
        } else if (imc >= 18.5 && imc <= 24.9) {
            setColor("#A7EA20");
            setText("Peso normal");
        } else if (imc >= 25 && imc <= 29.9) {
            setColor("#DCEA20");
            setText("Sobrepeso");
        } else if (imc >= 30 && imc <= 34.9) {
            setColor("#FCFF00");
            setText("Obesidad leve");
        } else if (imc >= 35 && imc <= 35.9) {
            setColor("#EE4F2F");
            setText("Obesidad moderada");
        } else if (imc >= 40) {
            setColor("#FF0000");
            setText("Obesidad mórbida");
        }
    }

    return (
        <>
            <div className="card card-style" style={{ marginTop: "10px" }}>
                <div className="d-flex content">
                    <div className="flex-grow-1">
                        <div>
                            <h1 className="font-700 mb-1">{user.Nombre} {user.Apellido_Materno} {user.Apellido_Paterno}</h1>
                            <p className="mb-0 pb-1 pe-3">
                                Sexo: {user.Sexo}
                            </p>
                            <p className="mb-0 pb-1 pe-3">
                                {user.Direccion}
                            </p>
                            <p className="mb-0 pb-1 pe-3">
                                Peso: {user.Peso} kg
                            </p>
                            <p className="mb-0 pb-1 pe-3">
                                Altura: {user.Altura / 100} mts
                            </p>
                            <p className="mb-0 pb-1 pe-3">
                                Teléfono: {user.Telefono}
                            </p>
                            <p className="mb-0 pb-1 pe-3">
                                Correo: {user.Correo}
                            </p>
                            <h5>
                                IMC: {IMC}
                            </h5>
                            <div style={{ backgroundColor: color, borderRadius: "10px", height: "30px", textAlign: "center" }}>
                                {text}
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg"
                            data-src="images/pictures/faces/4s.png"
                            width={80}
                            className="rounded-circle mt- shadow-xl preload-img entered loaded"
                            data-ll-status="loaded"
                        />
                    </div>
                </div>
            </div>
            <div className="card card-style" style={{ marginTop: "10px" }}>
                <div className="d-flex content">
                    <div className="flex-grow-1">
                        <h1 className="font-700 mb-1">Tipo de sangre</h1>
                        <p className="mb-0 pb-1 pe-3">
                            Tipo de Sangre: {user.Tipo_Sangre}
                        </p>
                    </div>
                </div>
            </div>
            <div className="card card-style" style={{ marginTop: "10px" }}>
                <div className="d-flex content">
                    <div className="flex-grow-1">
                        <h1 className="font-700 mb-1">Alergias</h1>
                        {user.Alergias && user.Alergias.map((alergia, index) => (
                            <div className="text-center mb-3">
                                <p key={index} className="icon icon-xs rounded-sm shadow-l me-1" style={{ width: "60%", backgroundColor: "#8cc152", color: "white" }}>
                                    {alergia}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="card card-style" style={{ marginTop: "10px" }}>
                <div className="d-flex content">
                    <div className="flex-grow-1">
                        <h1 className="font-700 mb-1">Enfermedades</h1>
                        {enfermedades && enfermedades.map((enfermedad, index) => {
                            let date = new Date(enfermedad.Fecha_Diagnostico)
                            let año = date.getFullYear();

                            return(
                            <div className="text-center mb-3" key={index} >
                                <p key={index+enfermedad.Nombre} className="icon icon-xs rounded-sm shadow-l me-1" style={{ width: "60%", backgroundColor: "#8cc152", color: "white" }}>
                                    {enfermedad.Nombre}, Detectada el {año}
                                </p>
                            </div>
                        )})}
                        <div className="flex-grow-1">
                            <div className="text-center mb-3">
                                <a href="/agregarEnfermedad" className="icon icon-xs rounded-sm shadow-l me-1 bg-phone" style={{ width: "80%" }}>
                                    Agregar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-style" style={{ marginTop: "10px" }}>
                <div className="d-flex content">
                    <div className="flex-grow-1">
                        <h1 className="font-700 mb-1">Ubicación</h1>
                        <p className="mb-0 pb-1 pe-3">
                            Fecha de Nacimiento: {user.Fecha_Nacimiento}
                        </p>
                        <p className="mb-0 pb-1 pe-3">
                            Lugar de Nacimiento: {user.Lugar_Nacimiento}
                        </p>
                    </div>
                </div>
            </div>
            <div className="card card-style" style={{ marginTop: "10px" }}>
                <div className="d-flex content">
                    <div className="flex-grow-1">
                        <h1 className="font-700 mb-1">Editar</h1>
                        <div className="text-center mb-3">
                            <a href="#" className="icon icon-xs rounded-sm shadow-l me-1 bg-phone" style={{ width: "80%" }}>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Perfil;