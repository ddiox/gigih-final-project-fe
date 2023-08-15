import React from "react";
import { Box, Container, Text, Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const Header = () => {
  return (
    <Box bg="rgb(40, 40, 47)" color="white" py={4}>
      <Container maxW="container.xl">
        <Text fontSize="xl" fontWeight="bold">
          Gigih Play
        </Text>
        <Button
          as={ReactRouterLink}
          to={"/"}
          size="sm"
          variant="outline"
          colorScheme="green"
          mt={4}
        >
          Home Play
        </Button>
      </Container>
    </Box>
  );
};

export default Header;
