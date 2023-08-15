import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Input,
  Button,
  Flex,
  VStack,
  StackDivider,
  Avatar,
} from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const DetailPage = () => {
  const { id } = useParams();

  const [datacomments, setDataComments] = useState([]);

  const [newComment, setNewComment] = useState({
    videoID: id,
    username: "",
    comment: "",
  });

  const {
    data: video,
    loading,
    error,
  } = useFetch(`http://localhost:8080/videos/${id}`);

  const {
    data: products,
    loading: loadingProducts,
    error: errorProducts,
  } = useFetch(`http://localhost:8080/videos/${id}/products`);

  const {
    data: comments,
    loading: loadingComments,
    error: errorComments,
  } = useFetch(`http://localhost:8080/videos/${id}/comments`);

  useEffect(() => {
    if (comments) {
      setDataComments(comments);
    }
  }, [comments]);

  if (loading) {
    return <Loading />;
  }

  if (loadingProducts) {
    return <Loading />;
  }

  if (loadingComments) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (errorProducts) {
    return <p>Error: {error.message}</p>;
  }

  if (errorComments) {
    return <p>Error: {error.message}</p>;
  }

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/submit-comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });

      if (response.ok) {
        console.log("Comment submitted successfully");
        // Update comments state with the new comment
        setDataComments([...comments, newComment]);
        setNewComment({
          videoID: id,
          username: "",
          comment: "",
        });
      } else {
        console.error("Failed to submit comment");
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <Container maxW="xl" py={8}>
      <Box mb={8}>
        <iframe
          width="660"
          height="415"
          src={video.url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Box>

      <Box mb={8}>
        <Heading as="h1" color="white" size="lg" mb={2}>
          {video.title}
        </Heading>
        <Text color="white">{video.description}</Text>
      </Box>
      <VStack divider={<StackDivider />} spacing={4} align="stretch" mb={8}>
        <Box>
          <Heading as="h2" color="white" size="md" mb={2}>
            Comments
          </Heading>
          {datacomments.map((comment, index) => (
            <Flex
              key={comment._id}
              mb={index !== datacomments.length - 1 ? 4 : 0}
            >
              <Avatar name={comment.username} src="avatar-url.jpg" size="sm" />
              <Box ml={4}>
                <Text color="white" fontWeight="bold">
                  {comment.username}
                </Text>
                <Text color="white">{comment.comment}</Text>
              </Box>
            </Flex>
          ))}
        </Box>
      </VStack>

      <Box mb={8}>
        <Heading as="h2" color="white" size="md" mb={2}>
          Leave a Comment
        </Heading>
        <form onSubmit={handleCommentSubmit}>
          <Input
            color="white"
            placeholder="Username"
            mb={2}
            value={newComment.username}
            onChange={(e) =>
              setNewComment({ ...newComment, username: e.target.value })
            }
          />
          <Input
            color="white"
            placeholder="Your Comment"
            mb={2}
            value={newComment.comment}
            onChange={(e) =>
              setNewComment({ ...newComment, comment: e.target.value })
            }
          />
          <Button colorScheme="blue" type="submit">
            Submit
          </Button>
        </form>
      </Box>

      {/* List Products */}
      <Box>
        <Heading as="h2" color="white" size="md" mb={2}>
          Products
        </Heading>
        <SimpleGrid columns={2} spacing={4}>
          {products.map((product, index) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default DetailPage;
