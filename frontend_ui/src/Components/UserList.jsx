import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GrFormView } from 'react-icons/gr';
import { deleteUser, updateUser } from '../redux/Users/user.action';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


let initialState = {
    name: "",
    email: "",
};
const UserList = ({ users }) => {
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [iduser, setIdUser] = useState('');
    const [formData, setFormData] = useState(initialState);


    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { name } = formData;
        if (name === "") {
            alert(`Please Fill Mandatory * Fileld`);
            return;
        };

        dispatch(updateUser(iduser, formData));

        setFormData({
            name: "",
            email: "",
        });
    };

    const handleEdit = (_id) => {
        setIdUser(_id);
        onOpen();
    };

    const handelDelete = (_id) => {
        dispatch(deleteUser(_id));
    };

    const { name, email } = formData;
    return (
        <Box>
            <TableContainer>
                <Table size='sm'>
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
                        {users && users.map(({ _id, name, email, createdAt, updatedAt }) =>
                            <Tr key={_id}>
                                <Td>{name}</Td>
                                <Td>{email}</Td>
                                <Td>{createdAt}</Td>
                                <Td>{updatedAt}</Td>

                                <Td> <Link to={`/${_id}`}><GrFormView fontSize={"23px"} /></Link> </Td>

                                <Td color={"green"}><AiFillEdit onClick={() => handleEdit(_id)}></AiFillEdit></Td>

                                <Td color={"red"}><AiFillDelete onClick={() => handelDelete(_id)}></AiFillDelete></Td>

                            </Tr>
                        )}
                    </Tbody>
                </Table>
            </TableContainer>

            {/* Chakra-ui Modal */}
            <Box>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Update User</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <form
                                onSubmit={onSubmit}
                                style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", width: "350px", padding: "10px", m: "auto", textAlign: "center" }}
                            >
                                <Input
                                    value={name}
                                    name="name"
                                    w="300px"
                                    placeholder="User Name"
                                    onChange={handleChange}
                                    type='text'
                                    maxLength={50}
                                    minLength={1}
                                    isRequired={true}
                                />
                                <Input
                                    value={email}
                                    name="email"
                                    w="300px"
                                    placeholder="User Email"
                                    onChange={handleChange}
                                    type='email'
                                />
                                {email.includes("@gmail.com") === false ? <p style={{ color: "red" }}>Not valid Email*</p> : null}
                                <Input
                                    bg="goldenrod"
                                    color={"white"}
                                    width={"300px"}
                                    type={"submit"}
                                    value="Update User"
                                />
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>

        </Box>
    );
}

export default UserList;