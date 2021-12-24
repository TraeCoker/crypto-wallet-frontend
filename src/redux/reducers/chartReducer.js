import { SET_CHART, SET_WALLET_CHART, SET_RAW_DATA, UPDATE_WALLET_CHART } from "../actions/constants";
import { renderSnapshotData } from "../actions/chartActions";

export default function chartReducer(state = {
    marketDisplay: false,
    chartData: [],
    rawData: {}
}, action ){

    switch(action.type){
        case SET_CHART:
            return {...state, marketDisplay: true, chartData: action.payload}
        case SET_WALLET_CHART:
            return {...state, marketDisplay: false, chartData: action.payload}
        case SET_RAW_DATA:
            return {...state, rawData: {...state.rawData, [action.payload[0]]: action.payload[1]}}
        case UPDATE_WALLET_CHART:
            
            const updatedAmounts = renderSnapshotData(action.payload.snapshot, action.payload.coins)
            const datasets = [...state.chartData.datasets]
            datasets.forEach(dataset =>{
                 const coin = dataset.label.toLowerCase()
                 dataset.data.push(updatedAmounts[coin].toFixed(2))
            })

            return {...state, chartData: {
                                labels: [...state.chartData.labels, updatedAmounts.label],
                                datasets: datasets,
            }}
        default:
            return state;
    };
};