import { useContext, useEffect, useState } from "react";
import { AuthContext, IAuthContext } from "../../context/AuthContext";
import { Usuario } from "../../models/Usuario";
import UserService from "../../services/User.service";
import { FullPageLoading } from '../FullPageLoading';
const Prueba = () => {
  const { logout } = useContext(AuthContext) as IAuthContext;
  const user = localStorage.getItem("currentUser");
  let jsonUser;
  if (user) {
    jsonUser = JSON.parse(user);
  }
  
  const [loading, setLoading] = useState(false);
  const [usuarios, setUsuarios] = useState<Array<Usuario>>([]);

  useEffect(()=>{
    obtenerUsuarios();
  },[])

  const obtenerUsuarios = async () =>{
    setLoading(true);
    try {
      const results = await UserService.getAll();      
      setUsuarios(results)
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
//   console.log(jsonUser);

  return(
      <>
      {!loading ? 
        usuarios.map((user,index)=>{
            return(
                <h1 key={index}>{JSON.stringify(user)}</h1>
            )
        })
      : <FullPageLoading/>}

      <button  onClick={() =>logout()}>Salir</button>

      </>
  )
};
export default Prueba;