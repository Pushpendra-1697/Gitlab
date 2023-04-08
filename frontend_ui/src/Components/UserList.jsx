import { Box, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GrFormView } from 'react-icons/gr';

const UserList = ({ users }) => {
    console.log(users)


    const handleEdit = (_id) => {
        // setIdBug(_id);
        // onOpen();
    };

    const handelDelete = (_id) => {
        // dispatch(deletebug(_id));
    };
    return (
        <Box>
            <Table variant={"striped"}>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>Registered At</Th>
                        <Th>Updated At</Th>
                        <Th>View</Th>
                        <Th>Edit</Th>
                        <Th>Delete</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {users.map(({ _id, name, email, createdAt, updatedAt }) =>
                        <Tr key={_id}>
                            <Td>{name}</Td>
                            <Td>{email}</Td>
                            <Td>{createdAt}</Td>
                            <Td>{updatedAt}</Td>

                            <Td><GrFormView /></Td>

                            <Td><AiFillEdit onClick={() => handleEdit(_id)}></AiFillEdit></Td>

                            <Td><AiFillDelete onClick={() => handelDelete(_id)}></AiFillDelete></Td>
                            
                        </Tr>
                    )}
                </Tbody>
            </Table>

        </Box>
    );
}

export default UserList;