import { SetStateAction, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserService from "../../services/User.Service";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = useState(false);
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
          if (response === "Credenciales Incorrectas") {
            console.log(response);
            toast.error("Error al intentar ingresar, revise sus credenciales");
          } else {
            localStorage.setItem("currentUser", JSON.stringify(response.user));
            localStorage.setItem("token", response.token);
            toast.success("Bienvenid@ " + response.user.nombre);
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
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-form validate-form">
            <h1
              style={{
                marginBottom: "20px",
                textAlign: "center",
                color: "#075ac1",
              }}
            >
              Mi Expediente
            </h1>
            <span
              className="login100-form-title p-b-43"
              style={{ marginBottom: "15px" }}
            >
              Iniciar Sesi&oacute;n
            </span>
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
  );
};

export default Login;
