import { Heading } from "@chakra-ui/react";
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
import { CheckCircleIcon, SettingsIcon } from "@chakra-ui/icons";
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
          fontWeight='300' 
        >
           AGRIMENSURA
        </Heading>
      </Box>
      <div className="container">
        <Heading
          size="4xl"
          fontFamily="Bebas neue, sans-sherif"
          className="text-dark"
          pt={10}
        >
          Que es la agrimensura?
        </Heading>

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
                La agrimensura es una disciplina que se encarga de medir y
                representar gráficamente la superficie terrestre, tanto en áreas
                urbanas como rurales.
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
      </div>
    </Box>
  );
}
