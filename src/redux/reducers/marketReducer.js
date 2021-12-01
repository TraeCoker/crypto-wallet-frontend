import { SET_TICKER_PRICES } from "../actions/constants";

export default function marketReducer(state = [], action){
    switch(action.type){
        case SET_TICKER_PRICES:
            return state;
        default:
            return state;
    }
}