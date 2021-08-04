import { Link as ChakraLink, Flex, Heading, Stack } from '@chakra-ui/react';
import {
  Github,
  Instagram,
  Linkedin,
  Twitter
} from '@icons-pack/react-simple-icons';

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    flexDir="column"
  >
    <Stack textAlign="center" spacing={5}>
      <Heading fontSize={['58px', '64px']} fontWeight="700">
        {title}
      </Heading>
      <Heading>I'm Shiyaam Sunder.</Heading>
      <Heading fontSize="28px">I design and build websites.</Heading>

      <Flex alignItems="center" justifyContent="space-around" pt="2rem">
        <ChakraLink isExternal href="https://github.com/shiyaamsunder">
          <Github size={28} />
        </ChakraLink>
        <ChakraLink isExternal href="https://twitter.com/shiyaamsunder">
          <Twitter size={28} />
        </ChakraLink>
        <ChakraLink
          isExternal
          href="https://www.linkedin.com/in/shiyaamsunderms/"
        >
          <Linkedin size={28} />
        </ChakraLink>
        <ChakraLink isExternal href="https://www.instagram.com/_surreal_man_/">
          <Instagram size={28} />
        </ChakraLink>
      </Flex>
    </Stack>
  </Flex>
);

Hero.defaultProps = {
  title: 'Hello there 👋'
};
