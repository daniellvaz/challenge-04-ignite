import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "400": "#FFBA08",
    },
    gray: {
      "900": "#47585B",
      "500": "#999999",
      "100": "rgba(9, 9, 9, 0.5)",
    },
    white: {
      "900": "#F5F8FA",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
    bar: "Barlow",
  },
});
