import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./utils/Header";
import Footer from "./utils/Footer";
import Agrimensura from "./utils/servicios/Agrimensura";
import Contacto from "./utils/Contacto";
import NotFound from "./utils/NotFound";
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Routes>
            <Route path="/pruebaEbaDeploy/" element={<Home />} />
            <Route path="/pruebaEbaDeploy/servicios/agrimensura" element={<Agrimensura />} />
            <Route path="/pruebaEbaDeploy/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
