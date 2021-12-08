import { SET_WALLET } from "../actions/constants";

export default function walletReducer(state = {
    current: {},
}, action){
    switch(action.type){
        case SET_WALLET:
            console.log(action.payload)
            return {current: action.payload[0], snapshots: action.payload[1]}
        default:
            return state;
    }
}