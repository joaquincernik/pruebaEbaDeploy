import contactoFoto from "../images/contacto.jpg";
import {
  Box,
  Heading,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Button,
} from "@chakra-ui/react";
import { MotionBox } from "./servicios/Agrimensura";
import { MotionCard } from "./ContactHome";
export function CartaContacto({ clase, titulo, boton }) {
  return (
    <div className="col-md-4 my-3">
      <MotionCard
        align="center"
        py="10"
        shadow="none"
        bgColor="rgba(0, 0, 0, 0.04)"
        whileHover={{
         
          transition: { duration: 1 },
          boxShadow: "0px 0px 20px rgba(0,0,0,0.5)",
        }}
      >
        <CardHeader pb="2" color="blue.700">
          <i style={{ fontSize: 30 }} className={clase} />
        </CardHeader>
        <CardBody align="center" py="1">
          <Heading
            size="lg"
            fontWeight="400"
            fontFamily="Raleway, sans-sherif"
            letterSpacing="0.2rem"
            color="blue.900"
          >
            {titulo}
          </Heading>
        </CardBody>
        <CardFooter py={10}>
          <Button
            bgGradient="linear(to-r, blue.700, blue.900)"
            color="white"
            _hover={{
              background: "white",
              color: "blue.800",
            }}
          >
            {boton}
          </Button>
        </CardFooter>
      </MotionCard>
    </div>
  );
}
export default function Contacto() {
  return (
    <Box w="100%" align="center" pb={5}>
      <MotionBox
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background: `url(${contactoFoto}) center/cover no-repeat`,
        }}
        width="100%"
        height="70vh"
        initial={{
          filter: "blur(5px)",
        }}
        animate={{
          filter: "blur(0px) grayscale(55%)",
        }}
        transition={{ duration: 1.3 }}
      >
        <Heading
          size="3xl"
          fontFamily="Raleway, sans-sherif"
          className="text-white"
          fontWeight="400"
          bgGradient="linear(to-r, blue.700, blue.900)"
          opacity="95%"
          p={5}
        >
          CONTACTANOS
        </Heading>
      </MotionBox>
      <div className="container">
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
    </Box>
  );
}
