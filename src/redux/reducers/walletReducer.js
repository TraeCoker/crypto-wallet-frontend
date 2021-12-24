import { CLEAR_WALLET, SET_WALLET, UPDATE_WALLET } from "../actions/constants";

export default function walletReducer(state = {
    current: {},
}, action){
    switch(action.type){
        case SET_WALLET:
            return {current: action.payload[0], snapshots: action.payload[1]}
        case UPDATE_WALLET:
            return {current: action.payload.wallet, snapshots: [...state.snapshots, action.payload.snapshot]}
        case CLEAR_WALLET:
            return {current: {}}
        default:
            return state;
    };
};