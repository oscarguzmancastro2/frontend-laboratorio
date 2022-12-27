// Importamos paquetes
import { NavLink } from "react-router-dom";
import styled from "styled-components";
//importamos componente de barra de navegacion
import NavBar from "./NavBar";
const Header = () => {
  return (
    <Head>
      <NavLink to ="/">
        <img src="Logo Lab.png" alt="Logo de Laboratorio" className="logo" />
      </NavLink>
      <NavBar />
    </Head>
  );
};

export default Header;

const Head = styled.header`
  height: 5rem;
  margin: 0.5rem 2rem 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    height: 4rem;
  }
`;
