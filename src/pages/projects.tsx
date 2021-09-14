import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Flex, Heading, Text, VStack } from "@chakra-ui/react";

import { Card, Link } from "../components";
export { Container } from "../containers/Container";
import { Container } from "../containers";

import type { Project } from "../types";

export default function ProjectsPage({ projects }: { projects: Project[] }) {
  return (
    <Container height="auto">
      <Head>
        <title>Projects 🚀</title>
      </Head>

      <Flex
        h="auto"
        w={["90%", "80%"]}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        py={8}
      >
        <VStack w={3 / 4} spacing={8}>
          <Heading>My Projects</Heading>

          <Text></Text>
        </VStack>

        <Flex direction="column" alignItems="center">
          {projects.map((project) => (
            <Card key={project.title} {...project} />
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const base =
    process.env.NODE_ENV === "production"
      ? "https://portfolio-shiyaamsunder.vercel.app/"
      : "http://localhost:3000/";
  const res = await fetch(`${base}data.json`);
  const projects: Project[] = await res.json();

  return {
    props: {
      projects,
    },
  };
};
