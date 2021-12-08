import { SET_WALLET } from "../actions/constants";

export default function walletReducer(state = [], action){
    switch(action.type){
        case SET_WALLET:
            console.log(action.payload)
            return state;
        default:
            return state;
    }
}