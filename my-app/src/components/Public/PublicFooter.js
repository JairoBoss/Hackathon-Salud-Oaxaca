import React from "react";

const PublicFooter = () => {
  return (
    <div id="page" data-swup={0} className="device-is-ios">
      <div id="footer-bar" className="footer-bar-1">
        <a href="/" className="active-nav">
          <i className="fa fa-home" />
          <span>Iniciar sesi&oacute;n</span>
        </a>
        <a href="/registrarse">
          <i className="fa fa-star" />
          <span>Registrarse</span>
        </a>
      </div>
    </div>
  );
};

export default PublicFooter;
