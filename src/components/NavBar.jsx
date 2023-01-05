//Crear lista de los menu de la pagina (Inicio, Nosotros, Servicios, Contactanos, Ingresa)
// Importamos paquetes
import styled from "styled-components";
import { NavLink } from "react-router-dom";
//importamos iconos
import { CgMenu } from "react-icons/cg";

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
              Contáctanos
            </NavLink>
          </li>
          <li>
            <NavLink to="/ingresa" className="navbar__link">
              Ingresa
            </NavLink>
          </li>
        </ul>
        {/* Colocar botones para abrir y cerrar en modo mobile */}
        <div className="menu_mobile">
          <CgMenu className="menu_mobile_icon" />
        </div>
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

    .navbar__link {
      text-transform: capitalize;
      font-size: 1.5rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.negro};
      transition: 0.7s all linear;
      &:hover {
        font-weight: 700;
      }
    }
  }
  .menu_mobile {
    visibility: hidden;
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .navbar__lista {
      visibility: hidden;
    }

    .menu_mobile {
      visibility: visible;

      .menu_mobile_icon {
        font-size: 2.5rem;
        color: ${({ theme }) => theme.colors.negro};
        position: absolute;
        right: 10%;
        top: 5%;
      }
    }
  }
`;
