//Crear lista de los menu de la pagina (Inicio, Nosotros, Servicios, Contactanos, Ingresa)
// Importamos paquetes
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <Nav>
      <div className="navbar">
        <ul className="navbar__lista">
          <li>
            <NavLink to="/" className="navbar__link">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/nosotros" className="navbar__link">
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink to="/servicios" className="navbar__link">
              Servicios
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactanos" className="navbar__link">
              Contactanos
            </NavLink>
          </li>
          <li>
            <NavLink to="/ingresa" className="navbar__link">
              Ingresa
            </NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  .navbar__lista {
        display: flex;
    gap: 1rem;
    align-items: center;
    
    .navbar__link{
      text-transform:capitalize;
      font-size:1.5rem;
      font-weight:500;
      color:${({ theme }) => theme.colors.negro};
      
    }
  }
`;
