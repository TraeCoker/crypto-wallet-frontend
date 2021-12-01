import { combineReducers } from "redux";
import coinsReducer from "./coinsReducer";
import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    coins: coinsReducer,
});

export default rootReducer