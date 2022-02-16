import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header/Header";
import { api, Continents } from "../../service/api";

export default function Continent() {
  const [continent, setContinent] = useState({} as Continents)
  const { query } = useRouter();
  const { slug } = query

  async function handleContinet() {
    const response = await api.get<Continents>(`/continents/${slug}`);

    setContinent(response)
  }

  useEffect(() => {
    handleContinet()
  }, []);

  if(!continent) {
    return <Heading>Carregando...</Heading>
  }

  return (
    <Flex
      width="100vw"
      direction="column"
    >
      <Header />
      <Flex
        h="500px"
        alignItems="flex-end"
        bgImage={continent.image}
        bgRepeat="no-repeat"
        bgSize="cover"
        color="white.900"
      >
        <Heading
          mb="60px"
        >
          {continent.title}
        </Heading>
      </Flex>
      <Box
        paddingX="140px"
      >
        <Box>
          <Box
            paddingY="80px"
            d="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text
              w="50%"
              textAlign="justify"
              fontSize="24px"
              lineHeight="8"
              color="gray.900"
            >
              Lorem ipsum dolor sit amet consectetur, 
              adipisicing elit. Dolor incidunt sed, 
              libero quas cumque laudantium atque 
              amet rem temporibus sint, magni cupiditate, 
              quae animi unde. Qui possimus ducimus soluta 
              aspernatur!
            </Text>
            <Box
              px="70px"
              w="50%"
              d="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box
                d="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="center"  
              >
                <Text 
                  fontSize="48px"
                  color="yellow.400"
                >
                  50
                </Text>
                <Text 
                  fontSize="24px"
                >
                  países
                </Text>
              </Box>
              <Box
                d="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="center"  
              >
                <Text 
                  fontSize="48px"
                  color="yellow.400"
                >
                  60
                </Text>
                <Text 
                  fontSize="24px"
                >
                  línguas
                </Text>
              </Box>
              <Box
                d="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="center"  
              >
                <Text 
                  fontSize="48px"
                  color="yellow.400"
                >
                  27
                </Text>
                <Text 
                  fontSize="24px"
                >
                  cidades +100
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Heading>
          Cidades +100
        </Heading>
        <Grid
          w="100%"
          templateColumns='repeat(4, 1fr)'
          gap="45"
          paddingY="80px"
        >
          <Card 
            title="Londres"
            subtitle="Reino Unido"
            header={continent.image}
            flag="/images/unitedKingdon.png"
          />
          <Card 
            title="Londres"
            subtitle="Reino Unido"
            header={continent.image}
            flag="/images/unitedKingdon.png"
          />
          <Card 
            title="Londres"
            subtitle="Reino Unido"
            header={continent.image}
            flag="/images/unitedKingdon.png"
          />
          <Card 
            title="Londres"
            subtitle="Reino Unido"
            header={continent.image}
            flag="/images/unitedKingdon.png"
          />
          <Card 
            title="Londres"
            subtitle="Reino Unido"
            header={continent.image}
            flag="/images/unitedKingdon.png"
          />
        </Grid>
      </Box>
    </Flex>
  )
}