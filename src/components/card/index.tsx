import {
  Box,
  Flex,
  Text,
  List,
  ListItem,
  Image,
  Link as ChakraLink,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Github } from "@icons-pack/react-simple-icons";
import { CardWrapper } from "./cardwrapper";

import type { Project } from "../../types";

export const Card = (props: Project) => {
  const color = useColorModeValue("#a67aff", "#c0a0ff");

  return (
    <CardWrapper my="8">
      <Flex
        flexDirection={["column", props.direction]}
        justifyContent="space-between"
      >
        <Box>
          <Image
            src={props.image}
            alt={props.title}
            height={["", "270px"]}
            rounded="md"
          />
        </Box>

        <Flex
          flexDirection="column"
          justifyContent="space-around"
          w={["100%", "50%"]}
          mt={[6, 0]}
        >
          <Stack spacing={[6, 8]}>
            <ChakraLink
              href={props.link}
              isExternal
              fontSize={["2xl", "3xl"]}
              fontWeight={700}
              color={color}
            >
              {props.title} <ExternalLinkIcon fontSize="md" mb={4} />
            </ChakraLink>
            <Text>{props.description} </Text>

            <List>
              <ListItem fontWeight={500}>{props.stack}</ListItem>
            </List>

            <Flex justifyContent="space-between" mt={4}>
              <Text fontWeight={600}>{props.time}</Text>
              <ChakraLink
                href={props.ghLink}
                isExternal
                fontSize="3xl"
                fontWeight={700}
                color={color}
              >
                <Github />
              </ChakraLink>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
    </CardWrapper>
  );
};
