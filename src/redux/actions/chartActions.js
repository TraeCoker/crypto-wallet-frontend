import { SET_CHART, SET_WALLET_CHART } from "./constants";

export function fetchChartData(){
    return dispatch => {
        fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=max&interval=daily")
        .then(resp => resp.json())
        .then(data => dispatch({type: SET_CHART, payload: data.prices}));
    }
}

export function fetchDataForWalletChart(setData){
    return dispatch => {
        fetch("https://api.coingecko.com/api/v3/coins/ethereum/market_chart/range?vs_currency=usd&from=1636162355&to=1638754355")
        .then(resp => resp.json())
        .then(data => dispatch({type: SET_WALLET_CHART, payload: renderData(data.prices)}))
    }
}

export function renderData(data){
    const xAxis = []
    const yAxis = []
    data.forEach(array =>{
        let date = new Date(array[0])
        xAxis.push(date.toLocaleDateString("en-US", {month: 'short', day: 'numeric'}))
        yAxis.push(array[1].toFixed(2))
    })


    return data = {
    labels: xAxis,
    datasets: [
      {
        label: 'Ethereum',
        data: yAxis,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }
}