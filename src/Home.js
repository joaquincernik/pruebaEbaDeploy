import React, { useState } from "react";
import Fondo from "./images/fondo.jpg";
import { Button, ButtonGroup, Divider, textDecoration, Box, AbsoluteCenter } from "@chakra-ui/react";
import JobsCard from "./utils/JobsCard";
import Projects from "./utils/Projects";
import ContactHome from "./utils/ContactHome";
import { motion } from "framer-motion"


export default function Home() {

  return (
    <div style={{marginBottom:"8rem"}}>
      <div
        style={{
          backgroundImage: `url(${Fondo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
        }}
        className="d-flex flex-column align-items-center justify-content-center mb-5"
      >
      <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 
          className="p-4 pt-5 text-center text-white"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "4rem",
            
          }}
        >
          ESTUDIO DE INGENIERIA CIVIL
        </h1>
      
    </motion.h1>
        
        <h2
          className="p-4 text-center text-white"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "2rem",
            fontWeight: 300,
            letterSpacing: "2px",
            lineHeight: 1.5,
          }}
        >
          Somos un equipo de profesionales apasionados por la creación de
          soluciones innovadoras y sostenibles para los desafíos de ingeniería
          que enfrentan nuestras comunidades.
        </h2>

        <a href="#" style={{ textDecoration: "none" }}>
          <Button colorScheme="teal" size="lg" variant="outline">
            Contactanos
          </Button>
        </a>
      </div>

      <JobsCard />
      <Divider />
      <Projects />
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg="white" px="4">
        <h1
          className="text-center text-info"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 200,
            fontStyle: "normal",
            fontSize: "2rem",
          }}
        >
        Contactanos</h1>
        </AbsoluteCenter>
      </Box>
      <ContactHome />
    </div>
  );
}
