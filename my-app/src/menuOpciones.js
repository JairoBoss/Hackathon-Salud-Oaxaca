import CuestionarioTemplate from "./Cuestionario/cuestionarioTemplate";

const MenuOpciones = () => {
  return (
    <div className="search-page">
      <div className="bg-theme card-style me-3 ms-3">                        
      </div>      
      <div className="search-trending card card-style">
        <div className="content mb-2">
          <h3>Cuestionario</h3>
          <p className="font-11 mt-n2">Hay un cuestionario para cada quien.</p>
        </div>
        <div className="list-group list-custom-small me-3 ms-3">
          <a href="#">
            <span className="font-400 color-blue-dark">Diabetes</span>
            <i className="color-gray-dark fa fa-angle-right" />
          </a>
          <a href="#">
            <span className="font-400 color-blue-dark">Hipertensión</span>
            <i className="color-gray-dark fa fa-angle-right" />
          </a>
          <a href="#">
            <span className="font-400 color-blue-dark">Obesidad</span>
            <i className="color-gray-dark fa fa-angle-right" />
          </a>
          <a href="#">
            <span className="font-400 color-blue-dark">Cáncer</span>
            <i className="color-gray-dark fa fa-angle-right" />
          </a>
          <a href="#">
            <span className="font-400 color-blue-dark">Medicamentos</span>
            <i className="color-gray-dark fa fa-angle-right" />
          </a>
          <a href="#" className="border-0">
            <span className="font-400 color-blue-dark">otra</span>
            <i className="color-gray-dark fa fa-angle-right" />
          </a>
        </div>
      </div>
      <CuestionarioTemplate/>
    </div>
  );
};

export default MenuOpciones;
