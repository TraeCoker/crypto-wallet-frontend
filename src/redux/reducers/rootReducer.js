import { combineReducers } from "redux";
import coinsReducer from "./coinsReducer";
import userReducer from './userReducer';
import chartReducer from "./chartReducer";


const rootReducer = combineReducers({
    user: userReducer,
    coins: coinsReducer,
    chart: chartReducer,
});

export default rootReducer