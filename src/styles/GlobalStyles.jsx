import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  // Sirve para colocar Fondo negro a la página
  background-color:${({ theme }) => theme.colors.blanco};
  //se asigna margen de cero (0) a todos los elementos
  margin:0;
  //se asigna padding de cero (0) a todos los elementos
  padding:0;
  //Se aplica el border box
  box-sizing:border-box;
  
}
// Quitar el punto a la lista
li{
  list-style:none;
}
// Quitar subrayado de enlaces de la lista
a{
  text-decoration:none;
}
.container{
  margin:0 auto;
  width:90%;
  
}
`;

export default GlobalStyle;
