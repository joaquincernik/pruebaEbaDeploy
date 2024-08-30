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

      <SimpleGrid
        spacing={4}
        my="5"
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
      <Card>
          <CardHeader align='center' pb='2'>
            <Heading size="md">
            <i
                  style={{ fontSize: 25 }}
                  className="fa fa-regular fa-envelope text-info p-3"
                />
              Envianos un mail
            </Heading>
          </CardHeader>
          <CardBody align='center' py='1'>
          <Button >ebaingenieria@gmail.com</Button>
          </CardBody>
        </Card>
        <Card>
          <CardHeader align='center' pb='2'>
            <Heading size="md">
            <i
                  style={{ fontSize: 25 }}
                  className="fa fa-brands fa-whatsapp text-info p-3"
                />
              Envianos un whatsapp
            </Heading>
          </CardHeader>
          <CardBody align='center' py='1'>
          <Button >3537325241</Button>
          </CardBody>
        </Card>
        <Card pb='7'>
          <CardHeader align='center' pb='2'>
            <Heading size="md">
            <i
                  style={{ fontSize: 25 }}
                  className="fa fa-brands fa-instagram text-info p-3"
                />
              Seguinos en instagram
            </Heading>
          </CardHeader>
          <CardBody align='center' pt='1'>
          <Button >@eba.ingenieria</Button>
          </CardBody>
        </Card>
       
      </SimpleGrid>
    </div>
  );
}
