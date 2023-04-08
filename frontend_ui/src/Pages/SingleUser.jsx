import { Alert, AlertIcon, Box, Container, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { backend_url } from './BackendURL';
import { useSelector } from 'react-redux';
import { BiLoaderCircle } from "react-icons/bi";



function getUserById(id) {
    return fetch(`${backend_url}/users/${id}`).then((res) => res.json());
};
const SingleUser = () => {
    const params = useParams();
    const [data, setData] = useState(null);
    const { loading, error } = useSelector((store) => store.userManager);

    useEffect(() => {
        getUserById(params.user_id).then((res) => setData(res.user)).catch((err) => console.log(err));
    }, []);


    if (data == null) {
        return (<h1 style={{ textAlign: "center", fontSize: "23px" }}>Loading....</h1>)
    };
    return (
        <Container boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" padding={"10px"} borderRadius={"10px"}>
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

            <Heading fontSize={"22px"}>Name: {data.name}</Heading>
            <Text>Email: {data.email}</Text>
            <Text>Bio: {data.bio}</Text>
            <Text>RegisterAt: {data.createdAt}</Text>
            <Text mb="13px">UpdatedAt: {data.updatedAt}</Text>
            <Link style={{ textDecoration: "none", color: "red", background: "black", padding: "8px", borderRadius: "10px" }} to='/'>Go Back</Link>
        </Container>
    );
}

export default SingleUser;