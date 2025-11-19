import { extendTheme } from '@chakra-ui/react';

// Colores personalizados
const colors = {
  brand: {
    50: '#e0f7f1',
    100: '#b3ede0',
    200: '#80e1cc',
    300: '#4dd6b9',
    400: '#26caa8',
    500: '#00bf97', // color principal
    600: '#00a780',
    700: '#008f6a',
    800: '#007953',
    900: '#005b3a',
  },
};

// Configuración del modo de color
const theme = extendTheme({
  colors,
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

export default theme;
