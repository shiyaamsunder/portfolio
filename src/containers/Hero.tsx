import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import {
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "@icons-pack/react-simple-icons";
import { Link } from "../components";

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    flexDir="column"
  >
    <Stack textAlign="center" spacing={5}>
      <Heading fontSize={["4xl", "5xl"]} fontWeight="700">
        {title}
      </Heading>
      <Text fontSize="4xl" fontWeight="700">
        My Name is
      </Text>
      <Text
        bgGradient="linear(to-l, #9246df,#f32d90)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Shiyaam Sunder
      </Text>
      <Heading fontSize="28px">I design and build websites.</Heading>

      <Flex alignItems="center" justifyContent="space-around" pt="2rem">
        <Link isExternal href="https://github.com/shiyaamsunder">
          <Github size={28} />
        </Link>
        <Link isExternal href="https://twitter.com/shiyaamsunder">
          <Twitter size={28} />
        </Link>
        <Link isExternal href="https://www.linkedin.com/in/shiyaamsunderms/">
          <Linkedin size={28} />
        </Link>
        <Link isExternal href="https://www.instagram.com/_surreal_man_/">
          <Instagram size={28} />
        </Link>
      </Flex>
    </Stack>
  </Flex>
);

Hero.defaultProps = {
  title: "Hello there 👋",
};
