import {useState} from "react";

const AddEnfermedad = () => {
    const [detectionYear, setDetectionYear] = useState("");
    const [enfermedad, setEnfermedad] = useState("");


    return (
        <div className="card card-style">
            <div className="content mb-0">
                <h2>Agregar enfermedad</h2>
                <p className="mb-4">
                    Aquí puedes agregar alguna enfermedad que padezcas
                </p>
                <div className="input-style input-style-always-active has-borders has-icon validate-field">                
                    <input
                        type="year"
                        className="form-control validate-name"
                        id="f1"
                        placeholder="Año"
                        value={detectionYear}
                        onChange={(e) => {setDetectionYear(e.target.value)}}
                    />
                    <label htmlFor="f1" className="color-blue-dark font-13">
                        Año de detección
                    </label>                    
                    <em>(requerido)</em>
                </div>
                <div className="input-style input-style-always-active has-borders has-icon validate-field mt-4">                    
                    <input
                        type="name"
                        className="form-control validate-name"
                        id="f1a"
                        placeholder="Migraña"
                        value={enfermedad}
                        onChange={(e) => {setEnfermedad(e.target.value)}}
                    />
                    <label htmlFor="f1a" className="color-blue-dark font-13">
                        Nombre de Enfermedad
                    </label>                    
                    <em>(Requerido)</em>
                </div>
                
                <a
                    href="#"
                    className="btn btn-full bg-green-dark btn-m text-uppercase rounded-sm shadow-l mb-3 mt-4 font-900"
                >
                    Guardar
                </a>
            </div>
        </div>

    );

}

export default AddEnfermedad;