import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCog } from "@fortawesome/free-solid-svg-icons";

const Header = ({ titulo }) => {
  return (
    <div className="header header-fixed header-logo-center">
      <a href="index.html" className="header-title">
        {titulo}
      </a>
      <a href="/" data-back-button="" className="header-icon header-icon-1">
        <i className="fas">
          <FontAwesomeIcon icon={faHome} />
        </i>
      </a>
      <a href="/" data-toggle-theme="" className="header-icon header-icon-4">
        <i className="fas">
          <FontAwesomeIcon icon={faCog} />
        </i>
      </a>
    </div>
  );
};

export default Header;
