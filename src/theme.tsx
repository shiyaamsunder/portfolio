import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints, mode } from '@chakra-ui/theme-tools';

const fonts = {
  mono: `'Menlo', monospace`,
  body: 'Inter',
  heading: 'InterVariable'
};

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em'
});

const theme = extendTheme({
  fonts,
  breakpoints
});

export default theme;
