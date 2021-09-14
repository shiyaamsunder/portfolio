import React from "react";
import { Link as ChakraLink, LinkProps, Box } from "@chakra-ui/react";
import NextLink from "next/link";

export const Link: React.FunctionComponent<LinkProps> = ({
  children,
  href,
  ...rest
}) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink
        borderRadius="md"
        fontWeight={600}
        fontSize="sm"
        p={2}
        _focus={{ boxShadow: "0px 0px 0px 3px #c0a0ff" }}
        {...rest}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
};
