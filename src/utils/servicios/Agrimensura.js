import { Heading, Image, Stack } from "@chakra-ui/react";
import {
  Box,
  Highlight,
  Card,
  CardBody,
  Text,
  Button,
  CardHeader,
  CardFooter,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import fotoAgrimensura from "../../images/agrimensura1.jpg";
import { CheckCircleIcon, CheckIcon, EmailIcon } from "@chakra-ui/icons";
import imagenLevantamientos from "../../images/levantamientos-topograficos.jpg";
import limitesAgrimensura from "../../images/limites-agrimensura.jpeg";
import georreferenciacion from "../../images/georreferenciacion.jpg";
export default function Agrimensura() {
  return (
    <Box w="100%" align="center" pb={5}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background: `url(${fotoAgrimensura}) center/cover no-repeat`,
        }}
        filter="grayscale(85%)"
        width="100%"
        height="75vh"
      >
        <Heading
          size="4xl"
          fontFamily="Raleway, sans-sherif"
          className="text-white"
          fontWeight="300"
        >
          AGRIMENSURA
        </Heading>
      </Box>
      <div className="container mt-5">
        <Box borderBottom="1px" color="blue.700">
          <Heading
            size="2xl"
            fontFamily="Raleway, sans-sherif"
            className="text-dark"
            fontWeight={400}
            pt={10}
            pb={3}
          >
            Que es la agrimensura?
          </Heading>
        </Box>
        <Card align="center" p={6} my={5}>
          <CardBody>
            <List
              spacing={5}
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 300,
                fontStyle: "normal",
                fontSize: "1.5rem",
              }}
            >
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="blue.800" />
                <Highlight
                  query="agrimensura"
                  styles={{ px: "1", py: "1", bg: "orange.100" }}
                >
                  La agrimensura es una disciplina que se encarga de medir y
                  representar gráficamente la superficie terrestre, tanto en
                  áreas urbanas como rurales.
                </Highlight>
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="blue.800" />
                Esta disciplina es esencial en la planificación y desarrollo de
                infraestructuras y obras civiles, ya que permite realizar
                mediciones precisas y fiables del terreno
              </ListItem>
            </List>
          </CardBody>
        </Card>

        <Box mb={10}>
          <Box borderBottom="1px" color="blue.700">
            <Heading
              size="2xl"
              fontFamily="Raleway, sans-sherif"
              className="text-dark"
              fontWeight={400}
              pt={10}
              pb={3}
            >
              En EBA nos encargamos de:
            </Heading>
          </Box>

          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            mt={7}
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "300px" }}
              src={imagenLevantamientos}
              filter="grayscale(55%)"
            />

            <Stack>
              <CardBody>
                <Heading
                  pb={3}
                  size="lg"
                  fontWeight="500"
                  fontFamily="Montserrat, sans-serif"
                >
                  Mensura y Subdivisión Rural y Urbana
                </Heading>

                <List
                  spacing={5}
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 300,
                    fontStyle: "normal",
                    fontSize: "1.2rem",
                  }}
                  py={3}
                >
                  <ListItem>
                    <ListIcon as={CheckIcon} color="blue.500" />
                    <b>Objetivo:</b> La mensura es el proceso de medir y
                    delimitar terrenos para determinar su extensión y límites
                    exactos, tanto en áreas rurales como urbanas. La subdivisión
                    implica dividir una propiedad grande en parcelas más
                    pequeñas, ya sea para su venta, desarrollo o administración.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="blue.500" />
                    <b>Aplicaciones en areas rurales:</b> La mensura y
                    subdivisión son fundamentales para la agricultura, la
                    gestión de recursos naturales, y la creación de nuevas
                    fincas. Los ingenieros civiles usan estos datos para
                    planificar infraestructuras como caminos rurales, sistemas
                    de riego, y servicios básicos.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="blue.500" />
                    <b>Aplicaciones en areas urbanas:</b> Es crucial para el
                    desarrollo urbano, permitiendo la creación de nuevos
                    barrios, la expansión de ciudades, y la planificación de
                    zonas residenciales, comerciales e industriales.{" "}
                  </ListItem>
                </List>
              </CardBody>
            </Stack>
          </Card>

          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            mt={7}
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "300px" }}
              src={limitesAgrimensura}
              filter="grayscale(55%)"
            />

            <Stack>
              <CardBody>
                <Heading
                  pb={3}
                  size="lg"
                  fontWeight="500"
                  fontFamily="Montserrat, sans-serif"
                >
                  Mensura y Loteo:
                </Heading>

                <List
                  spacing={5}
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 300,
                    fontStyle: "normal",
                    fontSize: "1.2rem",
                  }}
                  py={3}
                >
                  <ListItem>
                    <ListIcon as={CheckIcon} color="blue.500" />
                    <b>Objetivo:</b> El loteo es la subdivisión de una propiedad
                    en lotes más pequeños, generalmente con fines de
                    urbanización o desarrollo inmobiliario. La mensura asegura
                    que cada lote tenga dimensiones exactas y esté correctamente
                    delimitado.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="blue.500" />
                    <b>Aplicaciones:</b> Crear lotes para la construcción de
                    casas, apartamentos o edificios residenciales, preparar
                    terrenos para el desarrollo de centros comerciales, fábricas
                    o parques industriales.
                  </ListItem>
                </List>
              </CardBody>
            </Stack>
          </Card>

          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            mt={7}
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "300px" }}
              src={georreferenciacion}
              filter="grayscale(55%)"
            />

            <Stack>
              <CardBody>
                <Heading
                  pb={3}
                  size="lg"
                  fontWeight="500"
                  fontFamily="Montserrat, sans-serif"
                >
                  Replanteo y Amojonamiento:
                </Heading>

                <List
                  spacing={5}
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 300,
                    fontStyle: "normal",
                    fontSize: "1.2rem",
                  }}
                  py={3}
                >
                  <ListItem>
                    <ListIcon as={CheckIcon} color="blue.500" />
                    <b>Objetivo:</b> El replanteo es el proceso de trasladar los
                    planos y diseños de un proyecto de construcción al terreno
                    real. El amojonamiento es la colocación de mojones o hitos
                    para marcar los límites de una propiedad o de las obras a
                    realizar.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="blue.500" />
                    <b>Aplicaciones:</b> En construcción, antes de iniciar la
                    construcción de edificios, carreteras, puentes, u otras
                    infraestructuras, es crucial definir con precisión dónde se
                    ubicará cada elemento del proyecto. En delimitación de
                    propiedades, en proyectos de mensura, el amojonamiento
                    asegura que los límites de la propiedad estén claramente
                    identificados en el terreno.
                  </ListItem>
                </List>
              </CardBody>
            </Stack>
          </Card>

          <Button leftIcon={<EmailIcon />} size='xl' colorScheme="blue" p={4} variant="solid" my={10}>
            Contactanos!
          </Button>
        </Box>
      </div>
    </Box>
  );
}
