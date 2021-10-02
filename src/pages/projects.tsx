import Head from "next/head";
import { GetStaticProps } from "next";
import { Flex, Heading, Text, VStack, Spinner } from "@chakra-ui/react";

import { Card } from "../components";
export { Container } from "../containers/Container";
import { Container } from "../containers";

import { supabase } from "../utils";

const fetchProjects = async () => {
  try {
    let { data: projects, error } = await supabase.from("projects").select("*");
    if (error) throw new Error(error.message);
    return { projects, error };
  } catch (e) {
    console.log(e);
  }
};

export default function ProjectsPage({ projects }) {
  if (!projects)
    return (
      <Container h="90vh" justifyContent="center">
        {<Spinner size="xl" />}
      </Container>
    );
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
  const { projects } = await fetchProjects();

  return {
    props: {
      projects,
    },
  };
};
