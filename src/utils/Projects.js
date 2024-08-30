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
  BiShare,
  BiChat,
  Text,
  IconButton,
  BiLike,
} from "@chakra-ui/react";
import LogoImagen from "../images/IMAGEN 1.jpg";
export default function Projects() {
  return (
    <div className=" container mt-5">
      <h1>Mira alguno de nuestros ultimos trabajos</h1>
      <div className="row">
        <div className="col-md-6">
          <Card maxW="lg">
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar name="Segun Adebayo" src={LogoImagen} />

                  <Box>
                    <Heading size="sm">eba.ingenieria</Heading>
                    <Text>Santa Eufemia, Cordoba</Text>
                  </Box>
                </Flex>
                <IconButton
                  variant="ghost"
                  colorScheme="gray"
                  aria-label="See menu"
                />
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                Obra extensión de la red de gas natural en la localidad de Santa
                Eufemia 🚧🔥
              </Text>
            </CardBody>
            <Image
              objectFit="cover"
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Chakra UI"
            />

            <CardFooter
              justify="space-between"
              flexWrap="wrap"
              sx={{
                "& > button": {
                  minW: "136px",
                },
              }}
            >
              <Button flex="1" variant="ghost">
                Mira este post en instagram
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="col-md-6">
          <Card maxW="lg">
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar name="Segun Adebayo" src={LogoImagen} />

                  <Box>
                    <Heading size="sm">eba.ingenieria</Heading>
                    <Text>Santa Eufemia, Cordoba</Text>
                  </Box>
                </Flex>
                <IconButton
                  variant="ghost"
                  colorScheme="gray"
                  aria-label="See menu"
                />
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>
                Obra extensión de la red de gas natural en la localidad de Santa
                Eufemia 🚧🔥
              </Text>
            </CardBody>
            <Image
              objectFit="cover"
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Chakra UI"
            />

            <CardFooter
              justify="space-between"
              flexWrap="wrap"
              sx={{
                "& > button": {
                  minW: "136px",
                },
              }}
            >
              <Button flex="1" variant="ghost">
                Mira este post en instagram
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
