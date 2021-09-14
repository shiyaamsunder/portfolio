import Head from "next/head";
import { GetStaticProps } from "next";
import useSwr from "swr";
import { Flex, Heading, Text, VStack, Spinner } from "@chakra-ui/react";

import { Card, Link } from "../components";
export { Container } from "../containers/Container";
import { Container } from "../containers";

import type { Project } from "../types";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProjectsPage() {
  const { data, error } = useSwr("/api/projects", fetcher);

  if (!data)
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
          {data.map((project) => (
            <Card key={project.title} {...project} />
          ))}
        </Flex>
      </Flex>
    </Container>
  );
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   const res = await fetch(`/api/product`);
//   const projects: Project[] = await res.json();

//   return {
//     props: {
//       projects,
//     },
//   };
// };
