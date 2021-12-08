import { SET_WALLET } from "../actions/constants";

export default function walletReducer(state = {
    wallet = {},
    currentPrices = {}
}, action){
    switch(action.type){
        case SET_WALLET:
            console.log(action.payload)
            return state;
        case SET_CURRENT_PRICES:
            return state;
        default:
            return state;
    }
}