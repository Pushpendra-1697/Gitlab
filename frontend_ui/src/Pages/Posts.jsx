import { Alert, AlertIcon, Box, Button, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import PostForm from '../Components/PostForm';
import { useDispatch, useSelector } from 'react-redux';
import { BiLoaderCircle } from "react-icons/bi";
import { getPosts } from '../redux/Posts/post.action';
import PostList from '../Components/PostList';

var totalPages = 10;
const Posts = () => {
  const { loading, error, posts } = useSelector((store) => store.postManager);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const initPage = Number(searchParams.get('page')) || 1;
  const [page, setPage] = useState(initPage);

  useEffect(() => {
    dispatch(getPosts(page));
  }, [page]);

  useEffect(() => {
    setSearchParams({
      page: page,
      limit: 10
    });
  }, [page]);

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

      {/* Pagination */}
      <Box display={"flex"} justifyContent="center" alignItems={"center"} gap="2px" mt="4%">
        <Button isDisabled={page <= 1} variant={"outline"} onClick={() => setPage(page - 1)} >◀️PRE</Button>
        <Button color={"red"} variant={"outline"} isDisabled={true} border="1px solid blue">{page}</Button>
        <Button variant={"outline"} isDisabled={page == totalPages} onClick={() => setPage(page + 1)}>NEXT▶️</Button>
      </Box>

    </Box>
  )
}

export default Posts;