import React from "react";

const PrivateFooter = () => {
  return (
    <div id="page" data-swup={0} className="device-is-ios">
      <div id="footer-bar" className="footer-bar-1">
        <a href="/" className="active-nav">
          <i className="fa fa-home" />
          <span>Perfil</span>
        </a>
        <a href="/perfil">
          <i className="fa fa-star" />
          <span>Exámenes</span>
        </a>
        <a href="/diario">
          <i className="fa fa-heart" />
          <span>Diario</span>
        </a>
        <a href="/examenes">
          <i className="fa fa-search" />
          <span>Recomendaciones</span>
        </a>
        <a href="/recomendaciones" data-menu="menu-settings">
          <i className="fa fa-cog" />
          <span>Expediente</span>
        </a>
        <a href="/medicamento" data-menu="menu-settings">
          <i className="fa fa-cog" />
          <span>Medicamento</span>
        </a>
        <a href="/quizesSalud" data-menu="menu-settings">
          <i className="fa fa-cog" />
          <span>Quizes de salud</span>
        </a>
      </div>
    </div>
  );
};

export default PrivateFooter;
