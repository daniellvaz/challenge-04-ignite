import { Container, Image, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  src: string;
}

export default function TravelTypes({ title, src }: Props) {
  return (
    <Container
      d="flex"
      flexDir="column"
      alignItems="center"
    >
      <Image 
        w="80px"
        src={src} alt={title}
      />
      <Text
        mt="24px"
        fontSize="24px"
      >
        {title}
      </Text>
    </Container>
  );
}