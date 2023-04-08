import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./Users/user.reducer";
import { postReducer } from "./Posts/post.reducer";


const rootReducer = combineReducers({
    userManager: userReducer,
    postManager: postReducer
});

const composeEnhancer = Window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));