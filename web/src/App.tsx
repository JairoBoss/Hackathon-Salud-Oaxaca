import { useContext, useEffect, useState } from "react";
import "./App.css";
import { AuthContext, IAuthContext } from "./context/AuthContext";
import Login from "./components/public/login/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Prueba from "./components/admin/prueba";
import { FullPageLoading } from "./components/FullPageLoading";

function App() {
  const { currentUser, checkUser } = useContext(AuthContext) as IAuthContext;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkUser();
  }, []);

  const publicRoutes = (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );

  const adminRoutes = (
    <Routes>
      <Route path="/" element={<Prueba />} />
    </Routes>
  );

  const getRoute = () => {
    if (loading) {
      return (
        <Routes>
          <Route path="/" element={<FullPageLoading />} />          
        </Routes>
      );
    }

    if (!currentUser) return publicRoutes;

    if (currentUser) {
      return adminRoutes;
    }
  };

  return (
    <>
      <BrowserRouter>{getRoute()}</BrowserRouter>
    </>
  );
}

export default App;
