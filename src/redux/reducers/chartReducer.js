import { SET_CHART, SET_WALLET_CHART, SET_RAW_DATA } from "../actions/constants";

export default function chartReducer(state = {
    marketDisplay: false,
    chartData: [],
    rawData: {}
}, action ){

    switch(action.type){
        case SET_CHART:
            return {...state, marketDisplay: true, chartData: action.payload}
        case SET_WALLET_CHART:
            console.log({...state, marketDisplay: false, chartData: action.payload})
            return {...state, marketDisplay: false, chartData: action.payload}
        case SET_RAW_DATA:
            console.log({...state, rawData: {...state.rawData, [action.payload[0]]: action.payload[1]}})
            return {...state, rawData: {...state.rawData, [action.payload[0]]: action.payload[1]}}
        default:
            return state;
    }
}