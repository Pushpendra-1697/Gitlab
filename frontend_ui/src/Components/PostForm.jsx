import { Box, Input, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/Posts/post.action';


let initialState = {
    content: ''
};
const PostForm = () => {
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost(formData));
        setFormData({
            content: ''
        });
    };

    const { content } = formData;
    return (
        <Box mb="40px" textAlign={"center"} display="flex" justifyContent={"center"} alignItems="center">
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
                    value="Add Post"
                />
            </form>
        </Box>
    );
}

export default PostForm