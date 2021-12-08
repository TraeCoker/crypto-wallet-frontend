import { combineReducers } from "redux";
import coinsReducer from "./coinsReducer";
import userReducer from './userReducer';
import chartReducer from "./chartReducer";
import walletReducer from "./walletReducer";


const rootReducer = combineReducers({
    user: userReducer,
    coins: coinsReducer,
    wallet: walletReducer,
    chart: chartReducer,
});

export default rootReducer