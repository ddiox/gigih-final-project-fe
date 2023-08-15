import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";

const ErrorPage = () => {
  return (
    <Center h="100vh">
      <Box>
        <Heading as="h1" size="xl" textAlign="center">
          Not Found
        </Heading>
      </Box>
    </Center>
  );
};

export default ErrorPage;
