import axios from "axios";
import { backend_url } from '../../Pages/BackendURL';
import { ADD_POST, POST_ERROR, POST_LOADING, POST_SUCCESS, REMOVE_POST, UPDATE_POST } from "./post.type";

export const getPosts = () => async (dispatch) => {
    dispatch({ type: POST_LOADING });
    try {
        let res = await axios.get(`${backend_url}/analytics/posts`);
        dispatch({ type: POST_SUCCESS, payload: res.data.posts });
    } catch (e) {
        dispatch({ type: POST_ERROR, payload: e.message });
    }
};

export const addPost = (message) => async (dispatch) => {
    dispatch({ type: POST_LOADING });
    try {
        let res = await axios.post(`${backend_url}/posts/`, message);
        alert(`${res.data.msg}`);
        dispatch({ type: ADD_POST, payload: res.data.posts });
    } catch (e) {
        dispatch({ type: POST_ERROR, payload: e.message });
    }
};
// Note: In post and patch requests always gives object after url of json-server or api url; here message and changes both are objects which comes different-2 files;
export const updatePost = (id, changes) => async (dispatch) => {
    dispatch({ type: POST_LOADING });
    try {
        let res = await axios.put(`${backend_url}/posts/${id}`, {
            ...changes
        });
        dispatch({ type: UPDATE_POST, payload: res.data.post });
    } catch (e) {
        dispatch({ type: POST_ERROR, payload: e.message });
    }
};

export const deletePost = (id) => async (dispatch) => {
    dispatch({ type: POST_LOADING });
    try {
        let res = await axios.delete(`${backend_url}/posts/${id}`);
        dispatch({ type: REMOVE_POST, payload: res.data.post._id });
    } catch (e) {
        dispatch({ type: POST_ERROR, payload: e.message });
    }
};