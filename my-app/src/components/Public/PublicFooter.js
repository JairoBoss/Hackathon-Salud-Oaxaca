import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faUser } from "@fortawesome/free-solid-svg-icons";

const PublicFooter = () => {
  return (
    <div id="page" data-swup={0} className="device-is-ios">
      <div id="footer-bar" className="footer-bar-1">
        <a href="/" className="active-nav">
          <i>
            <FontAwesomeIcon icon={faUser} />
          </i>
          <span>Iniciar sesi&oacute;n</span>
        </a>
        <a href="/registrarse">
          <i>
            <FontAwesomeIcon icon={faUserEdit} />
          </i>
          <span>Registrarse</span>
        </a>
      </div>
    </div>
  );
};

export default PublicFooter;
