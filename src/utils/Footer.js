import { Box, Image } from "@chakra-ui/react";
import LogoEbaBlanco from "../images/logoEBAblanco.png";
export default function Footer() {
  return (
    
    <Box w="100%" h="200px" align='center' bgGradient="linear(to-b, blue.800, blue.900)">
      <Image boxSize="200px"  objectFit="cover" src={LogoEbaBlanco} />
    </Box>
  );
}
