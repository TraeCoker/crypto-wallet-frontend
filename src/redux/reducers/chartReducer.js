import { SET_CHART, SET_WALLET_CHART } from "../actions/constants";

export default function chartReducer(state = {
    marketDisplay: false,
    chartData: []
}, action ){

    switch(action.type){
        case SET_CHART:
            return {marketDisplay: true, chartData: action.payload}
        case SET_WALLET_CHART:
            return {marketDisplay: false, chartData: action.payload}
        default:
            return state;
    }
}