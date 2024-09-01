import {
  Avatar,
  Box,
  Heading,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import LogoImagen from "../images/IMAGEN 1.jpg";
import { motion } from "framer-motion";
function InstagramCard({ titulo, ubicacion, imagenPerfil, imagen, texto }) {
  return (
    <div className="col-md-6 my-3">
      
        <Card maxW="lg">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar name="Segun Adebayo" src={imagenPerfil} />

                <Box>
                  <Heading size="sm">{titulo}</Heading>
                  <Text>{ubicacion}</Text>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>{texto}</Text>
          </CardBody>
          <Image objectFit="cover" src={imagen} alt="Chakra UI" />

          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "136px",
              },
            }}
          >
            <Button leftIcon={<ExternalLinkIcon />} flex="1" variant="ghost">
              Mira este post en instagram
            </Button>
          </CardFooter>
        </Card>
 
    </div>
  );
}
export default function Projects() {
  return (
    <div className="container my-5 text-align-center hola">
    
      <h1
        className="py-5 text-center"
        style={{
          fontFamily: "Raleway, sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          letterSpacing: "0.5rem",
          lineHeight: "1.5",
        }}
      >
        Mira alguno de nuestros ultimos{" "}
        <span className="bg-info text-white px-3">trabajos</span>
      </h1>
      <div className="row">
        <InstagramCard
          titulo="eba.ingenieria"
          ubicacion="Santa Eufemia, Cordoba"
          texto="Obra extensión de la red de gas natural en la localidad de Santa Eufemia 🚧🔥"
          imagen="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          imagenPerfil={LogoImagen}
        />
        <InstagramCard
          titulo="eba.ingenieria"
          ubicacion="Santa Eufemia, Cordoba"
          texto="Obra extensión de la red de gas natural en la localidad de Santa Eufemia 🚧🔥"
          imagen="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          imagenPerfil={LogoImagen}
        />
      </div>
    </div>
  );
}
