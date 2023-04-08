import { ADD_USER, REMOVE_USER, UPDATE_USER, USER_ERROR, USER_LOADING, USER_SUCCESS } from "./user.type";

const initialState = {
    users: [],
    error: false,
    loading: false
};
export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_USER: {
            return {
                ...state,
                loading: false,
                users: [...state.users, payload]
            }
        }
        case USER_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }
        case USER_ERROR: {
            return {
                ...state,
                loading: false,
                error: payload || true
            }
        }
        case USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                users: payload
            }
        }
        case UPDATE_USER: {
            const updatedUsers = state.users.map((ele) => {
                if (ele._id === payload._id) {
                    return {
                        ...ele,
                        ...payload
                    }
                }
                return ele;
            })
            return {
                ...state,
                loading: false,
                users: updatedUsers
            }
        }
        case REMOVE_USER: {
            let filteredUsers = state.users.filter(
                (ele) => ele._id !== payload
            )
            return {
                ...state,
                loading: false,
                users: filteredUsers
            }
        }
        default: {
            return state;
        }
    }
}