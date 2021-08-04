import { Flex, useColorMode, FlexProps } from '@chakra-ui/react';

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: 'white', dark: '#121212' };

  const color = { light: '#121212', dark: 'white' };
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  );
};
