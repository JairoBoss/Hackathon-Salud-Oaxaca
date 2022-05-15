import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import PublicLayout from "./components/public/PublicLayout";
import PrivateLayout from "./components/private/PrivateLayout";
import Login from "./components/public/Login";
import Register from "./pages/Public/Register";
// import Form1 from "./pages/Public/Register/Form1";
import AddEnfermedad from "./components/private/AddEnfermedad"
import Perfil from "./components/private/Perfil"
import Examenes from "./components/public/quizzes";
import QuizzDiabetes from "./components/public/quizzes/quizzDiabetes";
import QuizzHipertencion from "./components/public/quizzes/quizzHipertencion";
import QuizzTabaquismo from "./components/public/quizzes/quizzTabaquismo";
import QuizzCardiovascular from "./components/public/quizzes/quizzCardiovascular";
import QuizzCovid from "./components/public/quizzes/quizzCovid";

function App() {
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
      <Route path="/examenes" element={<Examenes/>} />
      <Route path="/examen/diabetes" element={<QuizzDiabetes/>} />
      <Route path="/examen/presion-arterial" element={<QuizzHipertencion/>} />
      <Route path="/examen/indice-tabaquismo" element={<QuizzTabaquismo/>} />
      <Route path="/examen/riesgo-cardiovascular" element={<QuizzCardiovascular/>} />
      <Route path="/examen/test-covid" element={<QuizzCovid/>} />
      <Route path="recomendaciones" element={<div>Recomendaciones</div>} />
      <Route path="tratamiento" element={<div>Tratamiento</div>} />
      <Route path="*" element={<div>No encontrada</div>} />
      {/* Por si no existe la ruta */}
    </Route>
  );

  const getRoutes = () => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) return userRoutes;
    return publicRoutes;
  };

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
