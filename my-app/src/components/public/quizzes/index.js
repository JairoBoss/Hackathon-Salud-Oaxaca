import Card from "./card";

const Examenes = () => {
  return (
    <>
      <div className="page-content header-clear-medium">
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
            "https://imagenes.elpais.com/resizer/1f6Qz0r2BsGyAgkaxvQ3L1fjso4=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/G3EGGCDKNRFBDC27SDXQLF53BQ.jpg"            
          }
          descipcion={
            "Sabias que mas de 1/4 de la poblacion en MX tiene presion arterial?"
        }
        url={"examen/presion-arterial"}
        />
        <Card
          nombre={"Indice Tabaquismo"}
          imagen={
            "https://imagenes.elpais.com/resizer/1f6Qz0r2BsGyAgkaxvQ3L1fjso4=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/G3EGGCDKNRFBDC27SDXQLF53BQ.jpg"
          }
          descipcion={
            "Sabias que mas de 1/4 de la poblacion en MX tiene indicios de tabaquismo?"
        }
        url={"examen/indice-tabaquismo"}
        />
        <Card
          nombre={"Riesgo Cardiovascular"}
          imagen={
            "https://imagenes.elpais.com/resizer/1f6Qz0r2BsGyAgkaxvQ3L1fjso4=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/G3EGGCDKNRFBDC27SDXQLF53BQ.jpg"
          }
          descipcion={
            "Sabias que mas de 1/4 de la poblacion en MX tiene riesgo cardiovasculiar?"
        }
        url={"examen/riesgo-cardiovascular"}
        />
      </div>
    </>
  );
};

export default Examenes;
