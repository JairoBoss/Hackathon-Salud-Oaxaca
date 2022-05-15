import "./App.css";
import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import PublicLayout from "./components/public/PublicLayout";
import PrivateLayout from "./components/private/PrivateLayout";
import Login from "./components/public/Login";
import Register from "./pages/public/Register";
import AddEnfermedad from "./components/private/AddEnfermedad";
import Perfil from "./components/private/Perfil";
import Examenes from "./components/public/quizzes";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser, checkUser } = useContext(AuthContext);

  const publicRoutes = (
    <Route element={<PublicLayout />}>
      <Route index path="/" element={<Login />} />
      <Route path="registrarse" element={<Register />} />
      <Route path="*" element={<div>No encontrada</div>} />
    </Route>
  );

  const userRoutes = (
    <Route element={<PrivateLayout />}>
      <Route index path="/" element={<div>Inicio</div>} />
      <Route index path="/agregarEnfermedad" element={<AddEnfermedad />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/diario" element={<div>Diario</div>} />
      <Route path="/examenes" element={<Examenes />} />
      <Route path="recomendaciones" element={<div>Recomendaciones</div>} />
      <Route path="tratamiento" element={<div>Tratamiento</div>} />
      <Route path="*" element={<div>No encontrada</div>} />
      {/* Por si no existe la ruta */}
    </Route>
  );

  const getRoutes = () => {
    if (currentUser) return userRoutes;
    return publicRoutes;
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          {getRoutes()}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
