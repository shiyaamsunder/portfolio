import { Box, Flex } from "@chakra-ui/react";
import { DarkModeSwitch } from "../DarkModeSwitch";
import { Link } from "../link";

export const NavBar = () => {
  return (
    <Flex
      as="nav"
      w="100%"
      px={4}
      py={4}
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Box as="span" fontWeight="bold" color="" fontSize="1.2rem">
          Shiyaam Sunder
        </Box>
      </Box>
      <Flex w="300px" alignItems="center" justifyContent="space-between">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/skills">Skills</Link>
        <DarkModeSwitch />
      </Flex>
    </Flex>
  );
};
