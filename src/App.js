import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './utils/Header';
function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function App() {
  return (
    <ChakraProvider>
    <Router>
      <div>
      <Header/>
        <Routes>
          <Route path="/pruebaEbaDeploy/home" element={<Home />} />
          <Route path="/pruebaEbaDeploy/about" element={<About />} />
          <Route path="/pruebaEbaDeploy/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </ChakraProvider>
  );
}

export default App;
