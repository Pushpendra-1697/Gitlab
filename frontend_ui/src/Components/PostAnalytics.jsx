import { Alert, AlertIcon, Box, Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { BiLoaderCircle } from "react-icons/bi";
import { backend_url } from '../Pages/BackendURL';
import { AiFillLike } from "react-icons/ai";

const PostAnalytics = () => {
  const { loading, error, posts } = useSelector((store) => store.postManager);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await fetch(`${backend_url}/analytics/posts/top-liked`);
      res = await res.json();
      setData(res.posts);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box>
      <Heading textAlign={"center"} fontSize={"20px"}>Total No. of Posts {posts.length}</Heading>
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

      <Heading m={["15% 0 4% 0", "15% 0 4% 0", "3% 0 2% 0"]} textAlign={"center"} fontSize={"20px"}>Most Top Liked Posts {data.length}</Heading>

      <Box display={"grid"} gridTemplateColumns={{ base: "repeat(2,1fr)", sm: "repeat(2,1fr)", lg: "repeat(3,1fr)" }} gap={'20px'}>
        {data && data.map(({ _id, content, likes, createdAt, updatedAt, user_id }) =>
          <Box key={_id} padding={"10px"} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius={"10px"}>
            <Text>{`Content: ${content}`}</Text>
            <Text color={"green"} display={"flex"}><AiFillLike fontSize={"22px"} />{`${likes}`}</Text>
            <Text>{`Posted At: ${createdAt}`}</Text>
            <Text>{`Updated At: ${updatedAt}`}</Text>
          </Box>
        )}
      </Box>

    </Box>
  )
}

export default PostAnalytics;