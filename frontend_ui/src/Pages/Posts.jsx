import { Alert, AlertIcon, Box, Button, Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import PostForm from '../Components/PostForm';
import { useDispatch, useSelector } from 'react-redux';
import { BiLoaderCircle } from "react-icons/bi";
import { getPosts } from '../redux/Posts/post.action';
import PostList from '../Components/PostList';

const Posts = () => {
  const { loading, error, posts } = useSelector((store) => store.postManager);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-evenly"} mt="5%">
        <Heading textAlign={"center"} mb="20px">
          Posts page
        </Heading>
        <Link to="/postAnalytics"><Button>➡️PostAnalytics</Button></Link>
      </Box>

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

      <PostForm />

      <PostList posts={posts} />

    </Box>
  )
}

export default Posts;