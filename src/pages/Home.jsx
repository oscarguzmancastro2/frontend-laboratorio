// Importamos Styled components
import styled from "styled-components";
// Importamos Componentes
import Prueba from "../components/Prueba";

const Home = () => {
  return (
    <Wrapper className="container">
      <h1 className="titulo">Laboratorio Modelo</h1>
      <h1 className="titulo">Laboratorio Modelo 2</h1>
      <h3> Oscar Guzmán / Willy Corzo</h3>
      <h4 className="titulo">Pss Pss Hola maricon</h4>

      <Prueba />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.section`
  h1 {
    color: green;
    padding: 2rem 0 3rem 0;
    margin:1rem;
  }
  h3 {
    color:gray;
    padding: 3rem 0 3rem 0;
    margin:2rem;
  }
  .titulo{
    color: blue;
  }
`;
