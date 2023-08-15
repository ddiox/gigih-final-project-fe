import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import VideoCard from "../components/VideoCard";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";

const HomePage = () => {
  const {
    data: videoData,
    loading,
    error,
  } = useFetch("http://localhost:8080/videos");

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Box bg="rgb(40, 40, 47)" mx="auto" maxW="1250px">
      <SimpleGrid columns={[1, 3, 6]} gap={2}>
        {videoData.map((video) => (
          <VideoCard
            key={video._id}
            id={video._id}
            title={video.title}
            description={video.description}
            thumbnailUrl={video.thumbnailUrl}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HomePage;
