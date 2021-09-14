import { Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Link } from "../components";
export { Container } from "../containers/Container";
import { Container } from "../containers";

export default function SkillsPage() {
  return (
    <Container height="90vh">
      <Head>
        <title>Skills 💻️</title>
      </Head>

      <Flex h="100%" justifyContent="center" flexDirection="column">
        <Heading>My Skills</Heading>
        <Link href="/">Go Home</Link>
      </Flex>
    </Container>
  );
}
