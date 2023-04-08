import { Alert, AlertIcon, Box, Heading } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';
import { BiLoaderCircle } from "react-icons/bi";

const PostAnalytics = () => {
  const { loading, error, posts } = useSelector((store) => store.postManager);
  return (
    <Box>
      <Heading textAlign={"center"} fontFamily={"20px"}>Total No. of Posts {posts.length}</Heading>
      {loading && (
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          {" "}
          <BiLoaderCircle fontSize={"34px"} />{" "}
        </Box>
      )}
      {error && <Box display={"flex"} justifyContent="center" alignItems={"center"}>
        <Alert status='error' w="300px" >
          <AlertIcon />
          {`Something went Wrong 😒`}
        </Alert>
      </Box>}

    </Box>
  )
}

export default PostAnalytics;