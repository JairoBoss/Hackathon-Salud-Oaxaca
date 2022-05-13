import logo from "./logo.svg";
import "./App.css";
import MenuOpciones from "./menuOpciones";
import { Link, Switch, BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout></Layout>}>
        <Route index element={<div>Hola</div>}></Route>
        <Route path="perfil" element={<div>Hola 2</div>}></Route>
        <Route path="diario" element={<div>Hola 3</div>}></Route>
        <Route path="examenes" element={<div>Hola 4</div>}></Route>
        <Route path="recomendaciones" element={<div>Hola 5</div>}></Route>
        <Route path="*" element={<div>Hola 6</div>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
