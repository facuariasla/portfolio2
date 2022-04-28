import { extendTheme, theme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme1 = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  color: {
    primary: theme.colors.cyan,
  },
  styles: {
    global: {
      "html, body, #root": {
        height: "100%",
      },
    },
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
})