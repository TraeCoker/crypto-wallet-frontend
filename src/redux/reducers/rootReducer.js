import { combineReducers } from "redux";
import coinsReducer from "./coinsReducer";
import userReducer from './userReducer';
import chartReducer from "./chartReducer";
import snapshotsReducer from "./snapshotsReducer";

const rootReducer = combineReducers({
    user: userReducer,
    coins: coinsReducer,
    chart: chartReducer,
    snapshots: snapshotsReducer,
});

export default rootReducer