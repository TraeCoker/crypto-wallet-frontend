import { SET_CHART } from "../actions/constants";

export default function chartReducer(state = {
    displayChart: false,
    chartData: []
}, action ){

    switch(action.type){
        case SET_CHART:
            return {displayChart: true, chartData: action.payload}
        default:
            return state;
    }
}