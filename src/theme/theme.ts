import { extendTheme } from "@chakra-ui/react";
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
// import chakraTheme from '@chakra-ui/theme'

// const { Button } = chakraTheme.components
export const theme = extendTheme({
  colors: {
    primary: {
      main:"#F47C25",
      50: "#15616D",
      100: "#F9C567",
      200: "#16134f",
      400: "#ABA7A7",
      500: "#070529",
    },
    text: {
      50: "#595956",
      100: "#ABA7A7",
      200: "#1F1F1F",
      300: "#AAAAAA",
    },
    bg: {
      100: "#D9D9D9",
    },
  },

  //   components: { Switch: switchTheme, Select: selectTheme }
});
