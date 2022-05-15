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
import Estudios from "./components/private/Examenes";
import { AuthContext } from "./context/AuthContext";
import AgregarDiario from "./components/private/AgregarDiario";
import Examenes from "./components/public/quizzes/index";
import EditProfile from "./pages/public/EditProfile";
import Recomendaciones from "./components/private/Recomendaciones";
import Diario from "./components/private/Diario";
import Tratamiento from "./components/private/Tratamiento";
import AvisoPrivacidad from "./pages/public/AvisoPrivacidad";
import TYC from "./pages/public/TYC";

function App() {
  const { currentUser, checkUser } = useContext(AuthContext);

  const publicRoutes = (
    <Route element={<PublicLayout />}>
      <Route index path="/" element={<Login />} />
      <Route path="registrarse" element={<Register />} />
      <Route path="aviso-privacidad" element={<AvisoPrivacidad />} />
      <Route path="terminos-y-condiciones" element={<TYC />} />
      <Route path="*" element={<div>No encontrada</div>} />
    </Route>
  );

  const userRoutes = (
    <Route element={<PrivateLayout />}>
      <Route index path="/" element={<Perfil />} />
      <Route path="/enfermedades" element={<AddEnfermedad />} />
      <Route path="/diario" element={<Diario/>} />
      <Route path="/agregarDiario" element={<AgregarDiario/>} />      
      <Route path="/estudios" element={<Estudios />} />
      <Route path="/editar-perfil" element={<EditProfile />} />      
      <Route path="/examenes" element={<Examenes />} />
      <Route path="recomendaciones" element={<Recomendaciones/>}/>    
      <Route path="/editar-perfil" element={<EditProfile />} />
      <Route path="/diario" element={<Diario />} />
      <Route path="/examenes" element={<Examenes />} />      
      <Route path="/tratamiento" element={<Tratamiento />} />
      <Route path="/estudios" element={<Estudios />} />
      <Route path="*" element={<div>No encontrada</div>} />
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
