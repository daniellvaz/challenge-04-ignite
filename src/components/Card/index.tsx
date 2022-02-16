import { Box, Image, Text } from "@chakra-ui/react";

interface Props {
  header: string;
  title: string
  subtitle: string;
  flag: string;
}

export default function Card({ header, title, subtitle, flag }: Props) {
  return (
    <Box
      w="256px"
      h="279px"
      border="1px"
      borderColor="yellow.400"
      borderRadius="4px"
    >
      <Box 
        w="100%"
        h="179px"
        borderTopRadius="4px"
        bgImage={header}
      />
      <Box
        px="24px"
        d="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          mt="20px"
        >
          <Text
            mb="12px"
            fontSize="20px"
            color="gray.900"
          >
            {title}
          </Text>
          <Text
            fontSize="16px"
            color="gray.500"
          >
            {subtitle}
          </Text>
        </Box>
        <Image src={flag}/>
      </Box>
    </Box>
  )
}