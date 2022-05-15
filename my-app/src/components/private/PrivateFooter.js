import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBookMedical,
  faReceipt,
  faTriangleExclamation,
  faCapsules,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const PrivateFooter = () => {
  const location = useLocation();

  return (
    <div id="page" data-swup={0} className="device-is-ios">
      <div id="footer-bar" className="footer-bar-1">
        <a
          href="/"
          className={
            location.pathname.includes("perfil") || location.pathname === "/"
              ? "active-nav"
              : ""
          }
        >
          <i>
            <FontAwesomeIcon icon={faUser} />
          </i>
          <span>Perfil</span>
        </a>
        <a
          href="/diario"
          className={location.pathname.includes("diario") ? "active-nav" : ""}
        >
          <i>
            <FontAwesomeIcon icon={faBookMedical} />
          </i>
          <span>Diario</span>
        </a>
        <a
          href="/examenes"
          className={location.pathname.includes("examenes") ? "active-nav" : ""}
        >
          <i>
            <FontAwesomeIcon icon={faReceipt} />
          </i>
          <span>Exámenes</span>
        </a>
        <a
          href="/recomendaciones"
          className={
            location.pathname.includes("recomendaciones") ? "active-nav" : ""
          }
        >
          <i>
            <FontAwesomeIcon icon={faTriangleExclamation} />
          </i>
          <span>Recomendaciones</span>
        </a>
        <a
          href="/tratamiento"
          className={
            location.pathname.includes("tratamiento") ? "active-nav" : ""
          }
        >
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
