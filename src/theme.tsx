import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("whiteAlpha.900", "gray.900")(props),
    },
  }),
};

const fonts = {
  mono: `'Menlo', monospace`,
  body: "InterVariable",
  heading: "InterVariable",
};

const theme = extendTheme({
  fonts,
  styles,
});

export default theme;
