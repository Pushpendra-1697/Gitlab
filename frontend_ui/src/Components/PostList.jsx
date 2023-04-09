import { Box, useDisclosure, Text, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody, Input, ModalFooter, Button, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AiFillDelete, AiFillEdit, AiFillLike, AiFillDislike } from "react-icons/ai";
import { GrFormView } from 'react-icons/gr';
import { deletePost, updatePost } from '../redux/Posts/post.action';
import { Link } from 'react-router-dom';


let initialState = {
    content: ''
};
const PostList = ({ posts }) => {
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [idPost, setIdPost] = useState('');
    const [formData, setFormData] = useState(initialState);


    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { content } = formData;
        if (content === "") {
            alert(`Please Fill Mandatory * Fileld`);
            return;
        };

        dispatch(updatePost(idPost, formData));

        setFormData({
            content: ''
        });
    };



    const handleEdit = (_id) => {
        setIdPost(_id);
        onOpen();
    };

    const handelDelete = (_id) => {
        dispatch(deletePost(_id));
    };

    const { content } = formData;
    return (
        <>
            <Box display={"grid"} gridTemplateColumns={"repeat(3,1fr)"} gap={"20px"}>
                {posts && posts.map(({ content, _id, likes }) =>
                    <Box border={"1px solid red"}>
                        <Text textAlign={"center"}>{content}</Text>
                        <Box display={"flex"} justifyContent={"space-evenly"}>
                            <Link to={`/posts/${_id}`}><GrFormView fontSize={"23px"} /></Link>

                            <AiFillEdit onClick={() => handleEdit(_id)}></AiFillEdit>

                            <AiFillDelete onClick={() => handelDelete(_id)}></AiFillDelete>
                        </Box>


                        <Box display={"flex"} justifyContent={"space-evenly"}>
                            <AiFillLike></AiFillLike>
                            <Text>{likes}</Text>
                            <AiFillDislike></AiFillDislike>
                        </Box>
                    </Box>
                )}
            </Box>




            <Box>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Update Post</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <form
                                onSubmit={onSubmit}
                                style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", width: "350px", padding: "10px", m: "auto", textAlign: "center" }}
                            >
                                <Textarea onChange={handleChange} isRequired={true} value={content} name="content" maxLength="300" minLength={"1"} placeholder="Enter content here"></Textarea>

                                <Input
                                    bg="goldenrod"
                                    color={"white"}
                                    width={"300px"}
                                    type={"submit"}
                                    value="Update Post"
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

        </>
    )
}

export default PostList