import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";

export default function HeroImage() {
  return (
    <Box
      w="100"
      h="335px"
      paddingX="140px"
      d="flex"
      alignItems="center"
      justifyContent="space-between"
      bgImage="/images/Background.png"
      bgRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box>
        <Heading
          fontFamily="heading"
          fontSize="36"
          fontWeight="medium"
          color="white.900"
        >
          5 Continentes, <br />
          infinitas possibilidades.
        </Heading>
        <Text
          fontSize="20"
          color="white.900"
          mt="20px"
        >
          Chegou a hora de tirar do papel a viagem que você <br /> 
          sempre sonhou. 
        </Text>
      </Box>
      <Image 
        src="/images/Airplane.svg" alt="Airplane" 
        mt="100"
      />
    </Box>
  )
}