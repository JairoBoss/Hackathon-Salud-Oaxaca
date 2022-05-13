import { SetStateAction, useContext, useState } from "react";
import { AuthContext, IAuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import UserService from "../../../services/User.service";

function Login() {
  require("./login.css");
  const { login } = useContext(AuthContext) as IAuthContext;
  const [datos, setDatos] = useState({ correo: "", contraseña: "" });
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const iniciarSesion = async () => {
    if (datos) {
      const data = {
        contraseña: datos.contraseña,
        correo: datos.correo,
      };
      try {
        setLoading(true);
        const promise = UserService.login(data).then((response) => {
          login(response.user, response.token);
          navigate("/");
        });
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    } else {
    }
  };

  return (
    <div id="bodyy">
      <div className="materialContainer">
        <div className="box">
          <div className="title">LOGIN</div>
          <div className="input">
            <input
              type="text"
              placeholder="Username"
              name="name"
              id="name"
              onChange={(e) => setDatos({ ...datos, correo: e.target.value })}
            />
            <span className="spin" />
          </div>
          <div className="input">
            <input
              type="password"
              placeholder="Password"
              name="pass"
              id="pass"
              onChange={(e) =>
                setDatos({ ...datos, contraseña: e.target.value })
              }
            />
            <span className="spin" />
          </div>
          <div className="button login">
            <button onClick={iniciarSesion}>
              <span>GO</span> <i className="fa fa-check" />
            </button>
          </div>
          <a className="pass-forgot">Olvidaste tu contraseña?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
