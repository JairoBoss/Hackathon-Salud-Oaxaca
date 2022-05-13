import "./App.css";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import PublicLayout from "./components/Public/PublicLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        {/* Rutas publicas */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<div>Inicio</div>} />
          <Route path="tablero" element={<div>Admin</div>} />
          <Route path="perfil" element={<div>Perfil</div>} />
          <Route path="diario" element={<div>Diario</div>} />
          <Route path="examenes" element={<div>Examenes</div>} />
          <Route path="recomendaciones" element={<div>Recomendaciones</div>} />
          {/* Por si no existe la ruta */}
          <Route path="*" element={<div>No encontrada</div>} />
        </Route>
        <Route path="login" element={<div>Login</div>} />
        {/* Rutas protegidas */}
      </Route>
    </Routes>
  );
}

export default App;
