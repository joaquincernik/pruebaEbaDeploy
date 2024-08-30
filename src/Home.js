import React, { useState } from "react";
import Fondo from "./images/fondo.jpg";
import { Button, ButtonGroup, textDecoration } from '@chakra-ui/react'
import JobsCard from "./utils/JobsCard";
import Projects from "./utils/Projects"
export default function Home() {

  return (
    <div>
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

          <a href="#" style={{textDecoration:"none",}}>
        <Button colorScheme="teal" size="lg" variant="outline">
        Contactanos
        </Button>
        </a>
      </div>
     
     <JobsCard/>
      <Projects/>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title text-center pb-5">
            VISITA NUESTRAS SUCURSALES
          </h1>
          <div className="row">
            <div className="col-md-6 card ">
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <i
                  className="card-title fas fa-solid fa-house-user text-info"
                  style={{ fontSize: 30 }}
                />
                <h2 className="card-title text-center">
                  San Luis 1516 - Of. 211, Villa María (Cba.)
                </h2>
              </div>
            </div>
            <div className="col-md-6 card ">
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <i
                  className="card-title fas fa-solid fa-house-user text-danger"
                  style={{ fontSize: 30 }}
                />
                <h2 className="card-title text-center">
                  Belgrano 505, Justiniano Posse (Cba.)
                </h2>
              </div>
            </div>
            <div className="col-md-4 card">
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <i
                  style={{ fontSize: 30 }}
                  className="fa fa-regular fa-envelope text-info p-3"
                />
                <h2 className="text-center">Envianos un mail</h2>
              </div>
            </div>
            <div className="col-md-4 card ">
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <i
                  style={{ fontSize: 30 }}
                  className="fa fa-brands fa-instagram text-info p-3"
                />
                <h2 className="text-center">Seguinos en instagram</h2>
              </div>
            </div>
            <div className="col-md-4 card ">
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <i
                  style={{ fontSize: 30 }}
                  className="fa fa-brands fa-whatsapp text-info p-3"
                />
                <h2 className="text-center">Envianos un whatsapp</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
