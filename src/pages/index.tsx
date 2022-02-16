import { Box, Container, Divider, Heading } from "@chakra-ui/react";
import Carousel from "../components/Carousel";
import Header from "../components/Header/Header";
import HeroImage from "../components/HeroImage/HeroImage";
import TravelTypes from "../components/TravelTypes/TravelTypes";

export default function Home() {
  return (
    <Box>
      <Header />
      <HeroImage />
      <Box
        w="100"
        margin="0"
        paddingX="140px"
        paddingY="80px"
      >
        <Box
          d="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <TravelTypes 
            title="vida Noturna" 
            src="/images/cocktail.svg"
          />
          <TravelTypes 
            title="praia" 
            src="/images/surf.svg"
          />
          <TravelTypes 
            title="moderno" 
            src="/images/building.svg"
          />
          <TravelTypes 
            title="clássico" 
            src="/images/museum.svg"
          />
          <TravelTypes 
            title="e mais..." 
            src="/images/earth.svg"
          />
        </Box>
        <Box
          display="flex"
          flexDir="column"
          alignItems="center"
        >
          <Box 
            w="90px"
            h="1"
            mt="80px"
            mb="80px"
            bgColor="gray.900"
          />
          <Heading
            mb="54px"
            textAlign="center"
            fontSize="36px"
            fontWeight="medium"
            color="gray.900"
          >
            Vamos nessa? <br/>
            Então escolha seu continente
          </Heading>
        </Box>
        <Box>
          <Carousel />
        </Box>
      </Box>
    </Box>
  )
}
