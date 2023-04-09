import { Alert, AlertIcon, Box, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BiLoaderCircle } from "react-icons/bi";
import { backend_url } from '../Pages/BackendURL';

const UserAnalytics = () => {
  const { loading, error, users } = useSelector((store) => store.userManager);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await fetch(`${backend_url}/analytics/users/top-active`);
      res = await res.json();
      setData(res.users);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box>
      <Heading textAlign={"center"} fontSize={"20px"}>Total No. of Users {users.length}</Heading>

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

      <Heading m={["15% 0 4% 0", "15% 0 4% 0", "3% 0 2% 0"]} textAlign={"center"} fontSize={"20px"}>Most Active Users {data.length}</Heading>

      <TableContainer>
        <Table size='sm' variant={"striped"} colorScheme='teal'>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Posts_Count</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data && data.map(({ user_id, name, email, post_count }) =>
              <Tr key={user_id}>
                <Td>{name}</Td>
                <Td>{email}</Td>
                <Td>{post_count}</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>

    </Box>
  );
}

export default UserAnalytics;