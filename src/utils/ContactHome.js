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
  SimpleGrid,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { CartaContacto } from "./Contacto";
export default function () {
  return (
    <div className="container my-3">
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "450px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />

        <Stack align="center">
          <CardBody align="center">
            <Heading size="xl" fontFamily="Raleway, sans-sherif">
              Visita nuestra sucursal
            </Heading>

            <Text py="4">📍Belgrano 505, Justiniano Posse (Cordoba)</Text>
            <Button
              leftIcon={<ExternalLinkIcon />}
              variant="solid"
              colorScheme="teal"
            >
              Ir a google maps
            </Button>
          </CardBody>
        </Stack>
      </Card>

      <div className="row my-5">
      <CartaContacto
            clase="fa fa-regular fa-envelope p-3"
            titulo='Envianos un mail!'
            boton="ebaingenieria@gmail.com"
          />
           <CartaContacto
            clase="fa fa-brands fa-instagram p-3"
            titulo='Seguinos en instagram!'
            boton="@eba.ingenieria"
          />
           <CartaContacto
            clase="fa fa-regular fa-whatsapp p-3"
            titulo='Envianos un mensaje!'
            boton="3537325241"
          />
      </div>
    </div>
  );
}
