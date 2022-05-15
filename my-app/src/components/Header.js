import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCog,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = ({ titulo }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
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
      <a
        type="button"
        data-toggle-theme=""
        onClick={() => {
          logout();
          navigate("/");
        }}
        className="header-icon header-icon-4"
      >
        <i className="fas">
          <FontAwesomeIcon icon={faRightFromBracket} />
        </i>
      </a>
    </div>
  );
};

export default Header;
