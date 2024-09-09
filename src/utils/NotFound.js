import { Heading,Image } from "@chakra-ui/react";
import imagenGatito from '../images/gatito.jpg'
export default function NotFound(){
    return(
        <div className="d-flex flex-column align-items-center justify-content-center">
        <Heading textAlign='center' fontFamily='Bebas neue, sans-sherif' size='4xl'>
            UPS! LA PAGINA QUE BUSCAS NO EXISTE :(
        </Heading>
        <Image height='50vh' src={imagenGatito}/>
        </div>
    );
}