import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

import { NavBar } from "../components";
import theme from "../theme";

import "@fontsource/inter/variable.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <ChakraProvider resetCSS theme={theme}>
        <NavBar />
        <Component {...pageProps} />
      </ChakraProvider>
    </AnimatePresence>
  );
}

export default MyApp;
