import { SET_CHART, SET_WALLET_CHART, SET_RAW_DATA } from "../actions/constants";

export default function chartReducer(state = {
    marketDisplay: false,
    chartData: [],
    rawData: []
}, action ){

    switch(action.type){
        case SET_CHART:
            return {...state, marketDisplay: true, chartData: action.payload}
        case SET_WALLET_CHART:
            return {...state, marketDisplay: false, chartData: action.payload}
        case SET_RAW_DATA:
            console.log({...state, rawData: [...state.rawData, action.payload]})
            return {...state, rawData: [...state.rawData, action.payload]}
        default:
            return state;
    }
}