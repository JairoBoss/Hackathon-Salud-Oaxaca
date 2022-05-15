import PerfilMedicoService from "../../services/PerfilMedico.Service";
import ExamenService from "../../services/Examenes.Service";
import { useState, useEffect } from "react";
import RecomendacionesAcordion from "./RecomendacionesAcordion";
import PreguntaService from "../../services/Pregunta.Service";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Recomendaciones = () => {
    const [perfil, setPerfil] = useState("");
    const [bandera1, setBandera1] = useState(false);
    const [bandera2, setBandera2] = useState(false);
    let [arrRecomendaciones, setArrRecomendaciones] = useState("");

    let [arr, setArr] = useState("");



    const recomendacionesGlucosaNormal = [
        {
            "Titulo": "Glucosa normal",
            "Recomendacion": "Tus niveles son normales, ¡sigue así!",
            "Inf": 70,
            "Sup": 100
        }
    ];

    const recomendacionesGlucosaMedio = [
        {
            "Titulo": "Prediabetes",
            "Recomendacion": "Padeces prediabetes, pero no te preocupes, aun estas a tiempo de cambiar tus hábitos alimenticios y de ejercicio para volver a tus niveles normales, consulta a tu médico para una mejor orientación.",
            "Inf": 100,
            "Sup": 125
        }
    ];

    const recomendacionesGlucosaAlto = [
        {
            "Titulo": "Glucosa Alta",
            "Recomendacion": "Tus niveles pueden poner tu vida en riesgo, pero actualmente los tratamientos te permiten llevar una vida normal. Acércate a tu médico de confianza para que te oriente mejor",
            "Inf": 126,
            "Sup": 1000
        }
    ];

    const Glucosa = [recomendacionesGlucosaNormal, recomendacionesGlucosaMedio, recomendacionesGlucosaAlto];

    const recomendacionesCreatininaBajo = [
        {
            "Titulo": "Cretinina baja",
            "Recomendacion": "Tus niveles están muy bajos, se puede deber a una dieta muy restrictiva o a la pérdida de masa muscular, consulta a tu médico para conocer más sobre tus niveles",
            "Inf": 0,
            "Sup": 0.7
        }
    ];

    const recomendacionesCreatininaNormal = [
        {
            "Titulo": "Cretinina normal",
            "Recomendacion": "Tus niveles son normales, vas por muy buen camino.",
            "Inf": 0.71,
            "Sup": 1.3
        }
    ];

    const recomendacionesCreatininaAlto = [
        {
            "Titulo": "Cretinina Alta",
            "Recomendacion": "Tus niveles están muy altos, puede ser por estar haciendo ejercicio intenso, comer muchas carnes rojas, o tus medicamentos tomados actualmente",
            "Inf": 1.4,
            "Sup": 10000
        }
    ];

    const Creatinina = [recomendacionesCreatininaBajo, recomendacionesCreatininaNormal, recomendacionesCreatininaAlto];

    const recomendacionesTrigliceridosNormal = [
        {
            "Titulo": "Triglicéridos Normales",
            "Recomendacion": "Tus niveles son correctos, felicidades por tu estilo de vida.",
            "Inf": 0,
            "Sup": 150
        }
    ];

    const recomendacionesTrigliceridosMedio = [
        {
            "Titulo": "Triglicéridos Medio",
            "Recomendacion": "Tus niveles bien, pero se pueden mejorar, si tienes una dieta alta en carbohidratos, puedes bajar su consumo y aumentar un poco las proteínas.",
            "Inf": 150,
            "Sup": 199
        }
    ];

    const recomendacionesTrigliceridosAlto = [
        {
            "Titulo": "Triglicéridos Altos",
            "Recomendacion": "Tu salud puede estar en riesgo, tener los triglicéridos altos puede ser indicio de diferentes enfermedades cronico-degenerativas",
            "Inf": 200,
            "Sup": 499
        }
    ];

    const recomendacionesTrigliceridosMuyAltos = [
        {
            "Titulo": "Triglicéridos Muy Altos",
            "Recomendacion": "Tu salud puede estar en riesgo, tener los triglicéridos altos puede ser indicio de diferentes enfermedades cronico-degenerativas, te recomiendo que lo mas pronto posibles, le hagas una visita a tu medico.",
            "Inf": 500,
            "Sup": 1000
        }
    ];

    const Trigliceridos = [recomendacionesTrigliceridosNormal, recomendacionesTrigliceridosMedio, recomendacionesTrigliceridosAlto, recomendacionesTrigliceridosMuyAltos]

    const recomendacionesColesterolNormal = [
        {
            "Titulo": "Colesterol Normal",
            "Recomendacion": "Tus niveles de colesterol están bien, se nota que tu dieta está muy balanceada.",
            "Inf": 0,
            "Sup": 200
        }
    ];
    const recomendacionesColesterolAlta = [
        {
            "Titulo": "Colesterol Alto",
            "Recomendacion": "Tus niveles de colesterol están peligrosamente cerca del límite, esto se puede ser por la alta ingesta de alimentos con colesterol como huevos, carnes rojas o también por la falta de ejercicio. Recomendaciones, si fumas, dejar de hacerlo, consume en lo menos posible comida rápida, y has más ejercicio",
            "Inf": 200,
            "Sup": 239
        }
    ];
    const recomendacionesColesterolMuyAlta = [
        {
            "Titulo": "Colesterol Muy Alto",
            "Recomendacion": "Tienes alto riesgo de padecer enfermedades cardiopatías, mi recomendación es que un doctor te examine para que te lleve por el camino correcto para recuperarte. Recomendaciones, si fumas, dejar de hacerlo, consume en lo menos posible comida rápida, y has más ejercicio",
            "Inf": 240,
            "Sup": 100
        }
    ];

    const Colesterol = [recomendacionesColesterolNormal, recomendacionesColesterolAlta, recomendacionesColesterolMuyAlta];

    const recomendacionesLeucocitosBajo = [
        {
            "Titulo": "Leucocitos Bajos",
            "Recomendacion": "Tus niveles están mas bajos de lo recomendado, la mayoría de veces esto ocurre por enfermedades que necesitan ser diagnosticadas por un médico, acude con tu medico de confianza para salir de dudas.",
            "Inf": 0,
            "Sup": 4.4
        }
    ];

    const recomendacionesLeucocitosNormal = [
        {
            "Titulo": "Leucocitos Normales",
            "Recomendacion": "Tus niveles son normales, felicidades ",
            "Inf": 4.5,
            "Sup": 11.3
        }
    ];

    const recomendacionesLeucocitosAlto = [
        {
            "Titulo": "Leucocitos Altos",
            "Recomendacion": "Padeces leucocitosis, esto se puede explicar por una infección bacteriana, también puede ser por tabaquismo, ciertos medicamentos, consulta a tu medico para obtener mas informacion.",
            "Inf": 11.4,
            "Sup": 1000
        }
    ];

    const Leucocitos = [recomendacionesLeucocitosBajo, recomendacionesLeucocitosNormal, recomendacionesLeucocitosAlto]

    const recomendacionesPlaquetaBajo = [
        {
            "Titulo": "Plaquetas Bajas",
            "Recomendacion": "Padeces trombocitopenia, no tienes suficientes plaquetas para llevar a cabo una coagulación efectiva, se cuidadoso con tus heridas y en cuando puedas visita a un medico para buscar una solución",
            "Inf": 0,
            "Sup": 150
        }
    ];

    const recomendacionesPlaquetaNormal = [
        {
            "Titulo": "Plaquetas Normales",
            "Recomendacion": "Tus valores son normales, felicidades",
            "Inf": 151,
            "Sup": 400
        }
    ];

    const recomendacionesPlaquetaAltas = [
        {
            "Titulo": "Plaquetas Altas",
            "Recomendacion": "Padeces trombocitosis, tu cuerpo produce plaquetas de más, esto se puede deber a eficiencia de hierro o ciertos medicamentos, consulta a tu medico para que te oriente y diagnostique tu estado de salud.",
            "Inf": 401,
            "Sup": 10000
        }
    ];

    const Plaquetas = [recomendacionesPlaquetaBajo, recomendacionesPlaquetaNormal, recomendacionesPlaquetaAltas];


    const getRandom = () => {
        let num = Math.random() * (3 - 0) + 0;


        setArrRecomendaciones((arrRecomendaciones) => [...arrRecomendaciones, Plaquetas[num]]);

        arrRecomendaciones.push(Plaquetas[num]);
        arrRecomendaciones.push(Leucocitos[num]);
        arrRecomendaciones.push(Colesterol[num]);
    }



    useEffect(() => {
    }, []);



    return (
        <div className="card card-style">
            <div className="content mb-0">
                <h2>Recomendaciones</h2>
                <p className="mb-4">
                    Aquí puedes leer las recomendaciones que te hacemos con base en tus datos
                </p>                
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Plaquetas Altas</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Padeces trombocitosis, tu cuerpo produce plaquetas de más, esto se puede deber a eficiencia de hierro o ciertos medicamentos, consulta a tu medico para que te oriente y diagnostique tu estado de salud.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Leucocitos Normales</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Tus niveles son normales, felicidades
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Cretinina baja</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Tus niveles están muy bajos, se puede deber a una dieta muy restrictiva o a la pérdida de masa muscular, consulta a tu médico para conocer más sobre tus niveles
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div >
        </div >
    );
}

export default Recomendaciones;
