import { SET_COINS, COIN_FETCH_ERROR } from "../actions/constants";

export default function coinsReducer(state = [], action){
    switch(action.type){
        case SET_COINS:
            return action.payload;
        case COIN_FETCH_ERROR:
            
        default:
            return state;
    }
};