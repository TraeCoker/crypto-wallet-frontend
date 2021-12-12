import { SET_WALLET, UPDATE_WALLET } from "../actions/constants";

export default function walletReducer(state = {
    current: {},
}, action){
    switch(action.type){
        case SET_WALLET:
            return {current: action.payload[0], snapshots: action.payload[1]}
        case UPDATE_WALLET:
            console.log({current: action.payload.wallet, snapshots: [...state.snapshots, action.payload.snapshot]})
            return {current: action.payload.wallet, snapshots: [...state.snapshots, action.payload.snapshot]}
        default:
            return state;
    }
}