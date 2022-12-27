//Importamos estilos globales
import GlobalStyles from "./styles/GlobalStyles";
// importamos Theme
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Themes";
// Importamos Paquete
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Importamos paginas
import Home from "./pages/Home";
import Contactanos from "./pages/Contactanos";
import Ingresa from "./pages/Ingresa";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import PaginaError from "./pages/PaginaError";
//importamos componentes
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <GlobalStyles />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="/ingresa" element={<Ingresa />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="*" element={<PaginaError />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
