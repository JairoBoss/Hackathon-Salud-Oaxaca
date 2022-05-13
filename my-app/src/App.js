import logo from "./logo.svg";
import "./App.css";
import MenuOpciones from "./menuOpciones";
import { Link, Switch, BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import PublicLayout from "./components/Public/PublicLayout";
import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        {/* Rutas publicas */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<div>Inicio</div>} />
          <Route path="login" element={<div>Login</div>} />
          {/* Por si no existe la ruta */}
          <Route path="*" element={<div>No encontrada</div>} />
        </Route>

        {/* Rutas protegidas */}
        <Route element={<ProtectedRoutes />}>
          <Route index path="/" element={<div>Inicio</div>} />
          <Route path="tablero" element={<div>Admin</div>} />
          <Route path="perfil" element={<div>Perfil</div>} />
          <Route path="diario" element={<div>Diario</div>} />
          <Route path="examenes" element={<div>Examenes</div>} />
          <Route path="recomendaciones" element={<div>Recomendaciones</div>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
