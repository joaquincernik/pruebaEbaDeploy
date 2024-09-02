import React from "react";
import FotoAgrimensura from "../images/agrimensura1.jpg";
import fotoHidraulica from "../images/fotoHidraulica.jpg";
import fotoInfraestructura from "../images/fotoInfraestructura.jpg";
import fotoTopografia from "../images/fotoTopografia.jpg";
import fotoObras from "../images/fotoEjecucionObras.jpeg";
import fotoIngenieriaAmbiental from "../images/fotoIngenieriaAmbiental.jpg";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";
import { Stack} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Carta({ imagen, titulo, texto, nombreLink = titulo.toLowerCase() }) {
  const link = "/pruebaEbaDeploy/servicios/" + nombreLink;
  return (
    <motion.div className="col-md-4 my-3" 
    whileHover={{
      scale:'1.02',
    }}>
      <Card maxW="sm" >
        <CardBody>
          <Image
            src={imagen}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            filter="brightness(70%)"
          />
          <Stack mt="6" spacing="3">
            <Heading
              size="lg"
              fontFamily="Oswald, sans-serif"
              fontWeight="400"
              fontStyle="normal"
              textAlign="center"
            >
              {titulo}
            </Heading>
            <Text>{texto}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter justifyContent="center">
          <Link to={link}>
            <Button
              variant="solid"
              bgGradient="linear(to-r, blue.700, blue.900)"
              color="white"
              _hover={{
                background: "white",
                color: "blue.800",
              }}
            >
              Ver mas
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
export default function JobsCard() {
  return (
    
    <div className="container dedicamos my-5">
      <h1
        className="text-center py-5"
        style={{
          fontFamily: "Barlow, sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          letterSpacing: "0.5rem",
        }}
      >
        ¿A que nos <span className="text-info">dedicamos</span>?
      </h1>
     
     
    
   
      <div className="row">
        <Carta
          imagen={FotoAgrimensura}
          titulo="Agrimensura"
          texto="En EBA ingenieria nos encargamos de la medición y delimitación de terrenos y propiedades"
        />
        <Carta
          imagen={fotoHidraulica}
          titulo="Hidrologia e hidraulica"
          texto="Nos encargamos del estudio, diseño y gestión de proyectos relacionados con el agua en diversas formas"
          nombreLink="hidrologia-e-hidraulica"
        />

        <Carta
          imagen={fotoTopografia}
          titulo="Topografia"
          texto="Realizamos tareas de medición y representación de la superficie terrestre y otras áreas para apoyar la planificación, diseño, y construcción de proyectos de ingeniería"
        />
        <Carta
          imagen={fotoInfraestructura}
          titulo="Infraestructura"
          texto="Nos encargamos del diseño, construcción, mantenimiento, y gestión de las estructuras y sistemas que son fundamentales para el funcionamiento de una sociedad"
        />
        <Carta
          imagen={fotoIngenieriaAmbiental}
          titulo="Ingenieria ambiental"
          texto="Realizamos diseño, implementación y gestión de soluciones que protejan el medio ambiente y promuevan el desarrollo sostenible"
          nombreLink="ingenieria-ambiental"
        />
        <Carta
          imagen={fotoObras}
          titulo="Ejecucion y direccion de obras"
          texto="Llevamos a cabo y supervisamos la construcción de proyectos de ingeniería civil, asegurando que se cumplan los estándares de calidad, seguridad, plazos y presupuesto"
          nombreLink="ejecucion-y-direccion-de-obras"
        />
      </div>
    </div>
  );
}
