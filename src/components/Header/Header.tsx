import { Container, Image, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Header() {
  const { pathname } = useRouter();

  return (
    <Container
      w="100"
      h="100px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p="0"
    > 
      <Link 
        href="/"
        d={pathname === '/' ? "none" : "flex"}
        position="absolute"
        left="140px"
      >
        <Image src="/images/arrow.png" alt="Worldtrip logo"/>
      </Link>
      <Image src="/images/Logo.svg" alt="Worldtrip logo"/>
    </Container>
  )
}