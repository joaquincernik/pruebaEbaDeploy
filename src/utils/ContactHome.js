import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { CartaContacto } from "./Contacto";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const MotionCard = motion(Card);
export default function ContactHome() {
  return (
    <div className="container my-3">
      <MotionCard
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        shadow="none"
        bgColor="rgba(0, 0, 0, 0.04)"
        align="center"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "450px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />

        <Stack align="center">
          <CardHeader>
            <Heading
              size="xl"
              fontWeight="400"
              fontFamily="Raleway, sans-sherif"
              letterSpacing="0.2rem"
              color="blue.900"
              pl={5}
            >
              Visita nuestra sucursal
            </Heading>
          </CardHeader>
          <CardBody>
            <Text fontSize="1.2rem" fontFamily="Montserrat, sans-sherif">
              📍Belgrano 505, Justiniano Posse (Cordoba)
            </Text>
          </CardBody>
          <CardFooter>
            <Button
              leftIcon={<ExternalLinkIcon />}
              variant="solid"
              bgGradient="linear(to-r, blue.700, blue.900)"
              color="white"
              _hover={{
                background: "white",
                color: "blue.800",
              }}
            >
              <Link to="https://maps.app.goo.gl/rnFvRu9TdGEhX5T29">
                Ir a google maps
              </Link>
            </Button>
          </CardFooter>
        </Stack>
      </MotionCard>

      <div className="row my-5">
        <CartaContacto
          clase="fa fa-regular fa-envelope p-3"
          titulo="Envianos un mail!"
          boton="ebaingenieria@gmail.com"
        />
        <CartaContacto
          clase="fa fa-brands fa-instagram p-3"
          titulo="Seguinos en instagram!"
          boton="@eba.ingenieria"
        />
        <CartaContacto
          clase="fa fa-regular fa-whatsapp p-3"
          titulo="Envianos un mensaje!"
          boton="3537325241"
        />
      </div>
    </div>
  );
}
