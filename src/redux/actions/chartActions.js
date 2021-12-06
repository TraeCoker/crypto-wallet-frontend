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
        .then(data => dispatch({type: SET_WALLET_CHART, payload: renderData(data.prices)})
    }
}

function renderData(data){
    const labels = [1, 2, 3, 4]
    const formatedData = data.map(array =>{
        return {x: array[0], y: array[1]}
    })


    return data = {
    labels,
    datasets: [
      {
        label: 'Ethereum',
        data: formatedData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }
}