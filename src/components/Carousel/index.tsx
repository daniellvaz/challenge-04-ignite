import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Box, Heading, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { api, Continents } from '../../service/api';

export default function Carousel() {
  const [continents, setContinents] = useState<Continents[]>([])

  async function getContinents() {
    const response = await api.get<Continents[]>('/destinations');

    setContinents(response)
  } 

  useEffect(() => {
    getContinents()
  }, []);

  if(continents.length <= 0) {
    return <Text>Carregando...</Text>
  }

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      slidesPerView={1}
      pagination={true}
      navigation={true}
    >
      {
        continents.map(item => (
          <SwiperSlide key={item.id}>
            <Link href={`/continent/${item.slug}`}>
              <Box
                w="100%"
                h="455px"
                d="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
                bgImage={item.image}
                bgRepeat="no-repeat"
                bgSize="cover"
                textAlign="center"
                color="white.900"
              >
                <Heading
                  cursor="pointer"
                >
                  { item.title }
                </Heading>
                <Text
                  cursor="pointer"
                >
                  { item.description }
                </Text>
              </Box>
            </Link>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}