import { ADD_POST, POST_ERROR, POST_LOADING, POST_SUCCESS, REMOVE_POST, UPDATE_POST } from "./post.type";

const initialState = {
    posts: [],
    error: false,
    loading: false
};
export const postReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_POST: {
            return {
                ...state,
                loading: false,
                posts: [...state.posts, payload]
            }
        }
        case POST_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }
        case POST_ERROR: {
            return {
                ...state,
                loading: false,
                error: payload || true
            }
        }
        case POST_SUCCESS: {
            return {
                ...state,
                loading: false,
                posts: payload
            }
        }
        case UPDATE_POST: {
            const updatedPosts = state.posts.map((ele) => {
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
                posts: updatedPosts
            }
        }
        case REMOVE_POST: {
            let filteredPosts = state.posts.filter(
                (ele) => ele._id !== payload
            )
            return {
                ...state,
                loading: false,
                posts: filteredPosts
            }
        }
        default: {
            return state;
        }
    }
}