import Header from "../../Header";
import Card from "./card";

const Examenes = () => {
  return (
    <>
      <div className="page-content header-clear-medium">
          <Header titulo={"Exámenes"}/>
        <Card
          nombre={"Diabetes"}
          imagen={
            "https://imagenes.elpais.com/resizer/1f6Qz0r2BsGyAgkaxvQ3L1fjso4=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/G3EGGCDKNRFBDC27SDXQLF53BQ.jpg"
          }
          descipcion={
            "Sabias que mas de 1/4 de la poblacion en MX es diabetico?"
          }
          url={"examen/diabetes"}
        />
        <Card
          nombre={"Presion Arterial"}
          imagen={
            "https://www.consalud.es/uploads/s1/13/93/24/1/medico-tomando-la-presion-arterial-de-un-paciente-foto-freepik.jpeg"
          }
          descipcion={
            "Sabias que mas de 1/4 de la poblacion en MX tiene presion arterial?"
          }
          url={"examen/presion-arterial"}
        />
        <Card
          nombre={"Indice Tabaquismo"}
          imagen={
            "https://www.elindependiente.com/wp-content/uploads/2017/05/medicotabaco-656x368.jpg"
          }
          descipcion={
            "Sabias que mas de 1/4 de la poblacion en MX tiene indicios de tabaquismo?"
          }
          url={"examen/indice-tabaquismo"}
        />
        <Card
          nombre={"Riesgo Cardiovascular"}
          imagen={
            "https://cardiavant.com/wp-content/uploads/riesgo.png"
          }
          descipcion={
            "Sabias que mas de 1/4 de la poblacion en MX tiene riesgo cardiovasculiar?"
          }
          url={"examen/riesgo-cardiovascular"}
        />
        <Card
          nombre={"Test Covid"}
          imagen={
            "https://cdn.create.vista.com/api/media/medium/359781644/stock-photo-doctor-medical-mask-white-coat?token="
          }
          descipcion={
            "Sabias que mas de 1/4 de la poblacion en MX tiene riesgo de padecer covid?"
          }
          url={"examen/test-covid"}
        />
      </div>
    </>
  );
};

export default Examenes;
