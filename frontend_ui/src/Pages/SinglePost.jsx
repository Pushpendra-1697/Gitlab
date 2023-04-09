import { Alert, AlertIcon, Box, Container, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { backend_url } from './BackendURL';
import { useSelector } from 'react-redux';
import { BiLoaderCircle } from "react-icons/bi";

function getPostById(id) {
  return fetch(`${backend_url}/posts/${id}`).then((res) => res.json());
};

const SinglePost = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  const { loading, error } = useSelector((store) => store.postManager);

  useEffect(() => {
    getPostById(params.post_id).then((res) => setData(res.post)).catch((err) => console.log(err));
  }, []);

  if (data == null) {
    return (<h1 style={{ textAlign: "center", fontSize: "23px" }}>Loading....</h1>)
  };
  return (
    <Container boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" padding={"10px"} borderRadius={"10px"} mt={["15%", "15%", "5%"]}>
      {(loading) && (
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          {" "}
          <BiLoaderCircle fontSize={"34px"} />{" "}
        </Box>
      )}
      {error && <Box display={"flex"} justifyContent="center" alignItems={"center"}>
        <Alert status='error' w="300px" >
          <AlertIcon />
          {`Something went Wrong`}
        </Alert>
      </Box>}

      <Text>Content: {data.content}</Text>
      <Text>PostedAt: {data.createdAt}</Text>
      <Text mb="13px">UpdatedAt: {data.updatedAt}</Text>
      <Link style={{ textDecoration: "none", color: "red", background: "black", padding: "8px", borderRadius: "10px" }} to='/posts'>Go Back</Link>
    </Container>
  );
}

export default SinglePost;