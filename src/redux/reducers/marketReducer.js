import { SET_COINS } from "../actions/constants";

export default function marketReducer(state = [], action){
    switch(action.type){
        case SET_COINS:
            return state;
        default:
            return state;
    }
}