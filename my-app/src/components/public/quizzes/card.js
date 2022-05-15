const Card = ({ nombre, imagen, url, descipcion }) => {
  return (
    <div
      className="card card-style bg-25"
      data-card-height={200}
      style={{
        height: 200,
        backgroundImage: `url("${imagen}")`,
      }}
    >
      <div className="card-center">
        <h1 className="color-white text-center mb-0">{nombre}</h1>
        <p className="color-white text-center opacity-60 mt-n1 mb-3">
          {descipcion}
        </p>
        <a
          href={url}
          className="btn btn-m font-900 text-uppercase bg-red-dark btn-center-xl"
        >
          Ir
        </a>
      </div>
      <div className="card-overlay bg-black opacity-80" />
    </div>
  );
};
export default Card;
