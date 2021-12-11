import { NavLink } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io5";
import * as MdIcons from "react-icons/md";
import useAuth from "../auth/useAuth";

const Sidebar = () => {

  const auth = useAuth();
  
  return (
    <>
    <div className="sidebar bg-light">
      <ul>
        <li>
          <NavLink to="/" className="text-dark rounded py-2 w-100 d-inline-block px-3" exact="true" ><FaIcons.FaHome className="me-2" /> Inicio</NavLink>
        </li>
        {!auth.isLogged() && (
        <li>
          <NavLink to="/login" className="text-dark rounded py-2 w-100 d-inline-block px-3" exact="true" ><IoIcons.IoLogIn className="me-2" /> Iniciar Sesion</NavLink>
        </li>
        )}
        {auth.isLogged() && (
          <>
        <li>
          <NavLink to="/register" className="text-dark rounded py-2 w-100 d-inline-block px-3" exact="true" ><MdIcons.MdAppRegistration className="me-2" /> Registrar Usuario</NavLink>
        </li>
        <li>
          <NavLink to="/clients" className="text-dark rounded py-2 w-100 d-inline-block px-3" exact="true" ><FaIcons.FaUsers className="me-2" /> Clientes</NavLink>
        </li>
        <li>
          <NavLink to="/companies" className="text-dark rounded py-2 w-100 d-inline-block px-3" exact="true" ><IoIcons.IoBusiness className="me-2" /> Empresas</NavLink>
        </li>
          </>
        )}
      </ul>
    </div>
    </>
  )
}
export default Sidebar;


