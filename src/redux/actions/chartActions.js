import { SET_CHART } from "./constants";

export function fetchChartData(){
    return dispatch => {
        fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=max&interval=daily")
        .then(resp => resp.json())
        .then(data => dispatch({type: SET_CHART, payload: data.prices}));
    }
}

export function fetchChartForWallet(startDate){
    return dispatch => {
        fetch("https://api.coingecko.com/api/v3/coins/ethereum/market_chart/range?vs_currency=usd&from=1636162355&to=1638754355")
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
}
