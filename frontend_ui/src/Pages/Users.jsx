import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from '../redux/Users/user.action';
import { Alert, AlertIcon, Box, Button, Heading } from '@chakra-ui/react';
import { BiLoaderCircle } from "react-icons/bi";
import UserList from '../Components/UserList';
import UserForm from '../Components/UserForm';
import { Link } from 'react-router-dom';

const Users = () => {
  const { loading, error, users } = useSelector((store) => store.userManager);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);


  console.log(users)

  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-evenly"} mt="5%">
        <Heading textAlign={"center"} mb="20px">
          Users page
        </Heading>
        <Link to="/userAnalytics"><Button>➡️UserAnalytics</Button></Link>
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
          {`Something went Wrong`}
        </Alert>
      </Box>}



      <UserForm />

      <UserList users={users} />

    </Box>
  )
}

export default Users;