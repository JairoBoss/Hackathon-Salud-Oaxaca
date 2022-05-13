import React from "react";

const Footer = () => {
  return (
    <div id="page" data-swup={0} className="device-is-ios">
      <div id="footer-bar" className="footer-bar-1">
        <a href="/" className="active-nav">
          <i className="fa fa-home" />
          <span>Inicio</span>
        </a>
        <a href="/perfil">
          <i className="fa fa-star" />
          <span>Menu 2</span>
        </a>
        <a href="/diario">
          <i className="fa fa-heart" />
          <span>Menu 3</span>
        </a>
        <a href="/examenes">
          <i className="fa fa-search" />
          <span>Menu 4</span>
        </a>
        <a href="/recomendaciones" data-menu="menu-settings">
          <i className="fa fa-cog" />
          <span>Menu 5</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
