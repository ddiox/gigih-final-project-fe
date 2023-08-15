import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const VideoCard = ({ id, title, description, thumbnailUrl }) => {
  return (
    <Link to={`/videos/${id}`}>
      <Box
        border="1px solid #ccc"
        borderRadius="md"
        p={4}
        w="200px"
        h="380px"
        transition="0.3s"
        position="relative"
        backgroundImage={`url(${thumbnailUrl})`}
        backgroundSize="cover"
        backgroundPosition="center"
        cursor="pointer"
      >
        <Box
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          p={4}
          bg="rgba(0, 0, 0, 0.6)"
          color="white"
          whiteSpace="nowrap"
        >
          <Text color="white" fontWeight="Bold" fontSize="lg" isTruncated>
            {title}
          </Text>
          <Text mt={2} color="white" fontSize="md" isTruncated>
            {description}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

export default VideoCard;
