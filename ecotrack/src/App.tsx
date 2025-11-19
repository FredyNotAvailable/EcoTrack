// import React from 'react';
import { Box, VStack, Heading } from '@chakra-ui/react';
// import Router from './Router'; // Tu Router con PrivateRoute y PublicRoute

function App() {
  return (
      <Box minH="100vh" bg="gray.50" p={4}>
        <VStack spacing={8}>
          <Heading color="brand.500" textAlign="center">
            EcoTrack
          </Heading>

          {/* Aquí se renderizan todas las rutas */}
          {/* <Router /> */}
        </VStack>
      </Box>
  );
}

export default App;
