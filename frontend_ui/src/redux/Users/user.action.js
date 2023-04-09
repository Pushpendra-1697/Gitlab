import axios from "axios";
import { backend_url } from '../../Pages/BackendURL';
import { ADD_USER, REMOVE_USER, UPDATE_USER, USER_ERROR, USER_LOADING, USER_SUCCESS } from "./user.type";

export const getUsers = () => async (dispatch) => {
    dispatch({ type: USER_LOADING });
    try {
        let res = await axios.get(`${backend_url}/analytics/users`);
        dispatch({ type: USER_SUCCESS, payload: res.data.users });
    } catch (e) {
        dispatch({ type: USER_ERROR, payload: e.message });
    }
};

export const addUser = (message) => async (dispatch) => {
    dispatch({ type: USER_LOADING });
    try {
        let res = await axios.post(`${backend_url}/users/`, message);
        alert(`${res.data.msg}`);
        dispatch({ type: ADD_USER, payload: res.data.users });
        localStorage.setItem('user_id', res.data.users._id);
    } catch (e) {
        dispatch({ type: USER_ERROR, payload: e.message });
    }
};
// Note: In post and patch requests always gives object after url of json-server or api url; here message and changes both are objects which comes different-2 files;
export const updateUser = (id, changes) => async (dispatch) => {
    dispatch({ type: USER_LOADING });
    try {
        let res = await axios.put(`${backend_url}/users/${id}`, {
            ...changes
        });
        dispatch({ type: UPDATE_USER, payload: res.data.user });
    } catch (e) {
        dispatch({ type: USER_ERROR, payload: e.message });
    }
};

export const deleteUser = (id) => async (dispatch) => {
    dispatch({ type: USER_LOADING });
    try {
        let res = await axios.delete(`${backend_url}/users/${id}`);
        dispatch({ type: REMOVE_USER, payload: res.data.user._id });
    } catch (e) {
        dispatch({ type: USER_ERROR, payload: e.message });
    }
};