import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./utils/Header";
import Footer from "./utils/Footer";
import Agrimensura from "./utils/servicios/Agrimensura";
import Contacto from "./utils/Contacto";
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/pruebaEbaDeploy/">
            <Route index element={<Home />} />
            <Route path="servicios/">
              <Route path="agrimensura" element={<Agrimensura />} />
            </Route>
            <Route path="contacto/" element={<Contacto/>}/>
          </Route>
        </Routes>
      </Router>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
