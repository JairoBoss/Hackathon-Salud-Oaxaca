import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const publicRoutes = (
    <Routes>
      <Route path="/login" element={<div>Login</div>} />
      <Route path="/registro" element={<div>Registro</div>} />
      <Route path="*" element={<div>No encontrada</div>} />
    </Routes>
  );

  const userRoutes = (
    <Routes>
      <Route path="/" element={<div>Inicio</div>} />
      <Route path="tablero" element={<div>Admin</div>} />
      <Route path="perfil" element={<div>Perfil</div>} />
      <Route path="diario" element={<div>Diario</div>} />
      <Route path="examenes" element={<div>Examenes</div>} />
      <Route path="recomendaciones" element={<div>Recomendaciones</div>} />
      <Route path="*" element={<div>No encontrada</div>} />
    </Routes>
  );

  const getRoutes = () => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) return userRoutes;
    return publicRoutes;
  };

  return <BrowserRouter>{getRoutes()}</BrowserRouter>;
}

export default App;
