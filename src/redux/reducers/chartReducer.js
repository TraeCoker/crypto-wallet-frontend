import { SET_CHART } from "../actions/constants";

export default function chartReducer(state = {
    displayChart: false,
    chartData: {}
}, action ){

    switch(action.type){
        case SET_CHART:
            console.log(action.payload)
            return state;
        default:
            return state;
    }
}