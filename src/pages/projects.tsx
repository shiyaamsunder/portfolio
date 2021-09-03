import { Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Link } from "../components";
export { Container } from "../containers/Container";
import { Container } from "../containers";

export default function ProjectsPage() {
  return (
    <Container height="90vh">
      <Head>
        <title>Projects 🚀</title>
      </Head>

      <Flex h="100%" justifyContent="center" flexDirection="column">
        <Heading>My Projects</Heading>
        <Link href="/">Go Back</Link>
      </Flex>
    </Container>
  );
}
