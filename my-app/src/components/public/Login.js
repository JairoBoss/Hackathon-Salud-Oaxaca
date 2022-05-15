import { SetStateAction, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
import UserService from "../../services/User.Service";
import Logo from "../../images/logo.png";
import Header from "../Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  let navigate = useNavigate();

  require("./Login.css");

  const onChangeEmail = (event) => setEmail(event.target.value);
  const onChangePwd = (event) => setPwd(event.target.value);

  const iniciarSesion = async () => {
    if (email && pwd) {
      const data = {
        Contraseña: pwd,
        Correo: email,
      };
      try {
        setLoading(true);
        const promise = UserService.login(data).then((response) => {
          if (response === "Correo o contraseña incorrectas") {
            console.log(response);
            toast.error("Error al intentar ingresar, revise sus credenciales");
          } else {
            login(response.user, response.token);
            toast.success("Inicio de sesión exitoso");
            navigate("/");
          }
        });

        toast.promise(promise, {
          pending: "Espere por favor..",
          error: "Revise sus datos de acceso",
        });
      } catch (e) {
        toast.error("Error al intentar ingresar");
        console.log(e);
      } finally {
        setLoading(false);
      }
    } else {
    }
  };

  return (
    <>
      <Header titulo={"Iniciar sesión"}></Header>
      <div>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <div
                className="login100-form validate-form"
                style={{ backgroundColor: "white" }}
              >
                <img src={Logo} />
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100"
                    type="email"
                    value={email}
                    onChange={onChangeEmail}
                    onKeyPress={(ev) => {
                      if (ev.key === "Enter") {
                        iniciarSesion();
                      }
                    }}
                  />
                  <span className="focus-input100" />
                  <span className="label-input100">E-mail</span>
                </div>
                <div
                  className="wrap-input100 validate-input sm"
                  data-validate="Password is required"
                >
                  <input
                    className="input100"
                    type="password"
                    value={pwd}
                    onChange={onChangePwd}
                    onKeyPress={(ev) => {
                      if (ev.key === "Enter") {
                        iniciarSesion();
                      }
                    }}
                  />
                  <span className="focus-input100" />
                  <span className="label-input100 p-b-43">Contraseña</span>
                </div>
                <div className="container-login100-form-btn">
                  <button
                    id="btnEntrar"
                    className="login100-form-btn"
                    onClick={iniciarSesion}
                  >
                    Entrar
                  </button>
                </div>
              </div>

              <div className="login100-more"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
