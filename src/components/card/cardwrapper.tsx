import { Flex, useColorModeValue, SpaceProps } from "@chakra-ui/react";

export const CardWrapper: React.FunctionComponent<SpaceProps> = ({
  children,
  ...props
}) => {
  const bg = useColorModeValue("gray.50", "#1B1F30");
  return (
    <Flex
      w={["90%", "100%"]}
      p={7}
      borderRadius="md"
      shadow="md"
      backgroundColor={bg}
      alignItems="center"
      justifyContent="space-between"
      {...props}
    >
      {children}
    </Flex>
  );
};
