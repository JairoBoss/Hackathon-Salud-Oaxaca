import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBookMedical,
  faReceipt,
  faTriangleExclamation,
  faCapsules,
} from "@fortawesome/free-solid-svg-icons";

const PrivateFooter = () => {
  return (
    <div id="page" data-swup={0} className="device-is-ios">
      <div id="footer-bar" className="footer-bar-1">
        <a href="/perfil" className="active-nav">
          <i>
            <FontAwesomeIcon icon={faUser} />
          </i>
          <span>Perfil</span>
        </a>
        <a href="/diario">
          <i>
            <FontAwesomeIcon icon={faBookMedical} />
          </i>
          <span>Diario</span>
        </a>
        <a href="/examenes">
          <i>
            <FontAwesomeIcon icon={faReceipt} />
          </i>
          <span>Exámenes</span>
        </a>
        <a href="/recomendaciones">
          <i>
            <FontAwesomeIcon icon={faTriangleExclamation} />
          </i>
          <span>Recomendaciones</span>
        </a>
        <a href="/tratamiento">
          <i>
            <FontAwesomeIcon icon={faCapsules} />
          </i>
          <span>Tratamiento</span>
        </a>
      </div>
    </div>
  );
};

export default PrivateFooter;
