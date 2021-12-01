import { SET_COINS } from "../actions/constants";

export default function coinsReducer(state = [], action){
    switch(action.type){
        case SET_COINS:
            return action.payload;
        default:
            return state;
    }
}