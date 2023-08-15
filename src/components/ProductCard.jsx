import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

const ProductCard = ({ product }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      borderColor="black"
      p={1}
      bg="white"
      maxW="2xs"
    >
      <img src={product.imageUrl} alt={product.title} width="100%" />
      <Text fontWeight="bold" mt={1} fontSize="xx-small">
        {product.title}
      </Text>
      <Text color="gray.600" fontSize="xx-small">
        {product.description}
      </Text>
      <Text color="blue.500" fontWeight="bold" mt={1} fontSize="xx-small">
        RP {product.price}
      </Text>
      <Button
        as="a"
        href={product.link}
        colorScheme="blue"
        size="xs"
        mt={1}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Product
      </Button>
    </Box>
  );
};

export default ProductCard;
