import { Box, useDisclosure, Text, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, ModalBody, Input, ModalFooter, Button, Textarea, Container } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AiFillDelete, AiFillEdit, AiFillLike, AiFillDislike } from "react-icons/ai";
import { GrFormView } from 'react-icons/gr';
import { deletePost, updatePost, updatePostLike, updatePostUnLike } from '../redux/Posts/post.action';
import { Link } from 'react-router-dom';


let initialState = {
    content: ''
};
const PostList = ({ posts }) => {
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [idPost, setIdPost] = useState('');
    const [formData, setFormData] = useState(initialState);
    const [likesCount, setLikesCount] = useState(0);

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

    const handleLikes = async (_id) => {
        setLikesCount(likesCount + 1);
        dispatch(updatePostLike(_id, likesCount));
        setLikesCount(0);
    };

    const handleUnLikes = async (_id) => {
        setLikesCount(likesCount - 1);
        dispatch(updatePostUnLike(_id, likesCount));
        setLikesCount(0);
    };

    const { content } = formData;
    return (
        <>
            <Box display={"grid"} gridTemplateColumns={{ base: "repeat(2,1fr)", sm: "repeat(2,1fr)", lg: "repeat(3,1fr)" }} gap={"20px"}>
                {posts && posts.map(({ content, _id, likes }) =>
                    <Box key={_id} padding={"10px"} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius={"10px"}>
                        <Box display={"flex"} justifyContent={"space-between"} m="2% 0">
                            <Text>{content}</Text>
                            <Box display={"flex"} justifyContent={"space-evenly"} gap={"5px"}>
                                <Link to={`/posts/${_id}`}><GrFormView fontSize={"23px"} /></Link>
                                <AiFillEdit color='green' onClick={() => handleEdit(_id)}></AiFillEdit>
                                <AiFillDelete color='red' onClick={() => handelDelete(_id)}></AiFillDelete>
                            </Box>
                        </Box>

                        <Container display={"flex"} gap={"12px"}>
                            <Box display={"flex"}>
                                <AiFillLike color='green' onClick={() => handleLikes(_id)}></AiFillLike>
                                <Text>{likes}</Text>
                            </Box>
                            <Button color={"red"} isDisabled={likes <= 0}> <AiFillDislike onClick={() => handleUnLikes(_id)}></AiFillDislike> </Button>
                        </Container>
                    </Box>
                )}
            </Box>

            {/* Chakra-ui Modal */}
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
    );
}

export default PostList;