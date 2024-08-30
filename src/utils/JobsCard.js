import React from "react";
import FotoAgrimensura from "../images/agrimensura1.jpg";
import fotoHidraulica from "../images/fotoHidraulica.jpg";
import fotoInfraestructura from "../images/fotoInfraestructura.jpg";
import fotoTopografia from "../images/fotoTopografia.jpg";
import fotoObras from "../images/fotoEjecucionObras.jpeg";
import fotoIngenieriaAmbiental from "../images/fotoIngenieriaAmbiental.jpg";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";

function Carta({ imagen, titulo, texto, breakpoint }) {
  return (
    <div className="col-md-4">
      <Card maxW="sm">
        <CardBody>
          <Image
            src={imagen}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
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
          <Button variant="solid" colorScheme="teal">
            Ver mas
          </Button>
        </CardFooter>
      </Card>
    </div>
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
          fontSize: "3.4rem",
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
          texto="Nos encargamos del estudio, diseño y gestión de proyectos relacionados con el agua en diversas formas"/>
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
        />
        <Carta
          imagen={fotoObras}
          titulo="Ejecucion y direccion de obras"
          texto="Llevamos a cabo y supervisamos la construcción de proyectos de ingeniería civil, asegurando que se cumplan los estándares de calidad, seguridad, plazos y presupuesto"
        />
      </div>
    </div>
  );
}
