import { SET_CHART, SET_WALLET_CHART, SET_RAW_DATA } from "./constants";

export function fetchChartData(){
    return dispatch => {
        fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=max&interval=daily")
        .then(resp => resp.json())
        .then(data => dispatch({type: SET_CHART, payload: data.prices}));
    }
}

export function fetchWalletData(coin, start, end){
    return dispatch => {
      
        console.log(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart/range?vs_currency=usd&from=${start}&to=${end}`)
        fetch(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart/range?vs_currency=usd&from=${start}&to=${end}`)
        .then(resp => resp.json())
        .then(data => {
    
            return dispatch({type: SET_RAW_DATA, payload: [coin, data.prices]})
        });
    };
};

export function retrieveWalletChartData(dayshots){
    return dispatch => {
        let today = new Date()
        let start = dayshots[0].unix / 1000;
        let end = today.getTime() / 1000;
        
        dispatch(fetchWalletData("bitcoin", start, end))
        dispatch(fetchWalletData("ethereum", start, end))
        dispatch(fetchWalletData("tether", start, end))
        dispatch(fetchWalletData("cardano", start, end))
        dispatch(fetchWalletData("solana", start, end))

    }
}

export const datesAreSame = (first, second) => {
    
    return first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();
}




export function renderMarketData(data){
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

export function renderRawData(rawData, snapshots){
    //rawData = [{bitcoin: [day/hr, price]}, {ethereum: [day/hr, price]}, ...]
    //snapshots = [{id: 1, bitcoin: .005, unix: 3133113,}...]

    //const stockChangeDates =snapshots.map(day => day.unix);

    let filteredData = {}
    const keys = Object.keys(rawData)


    keys.forEach(coinKey =>
        filteredData[coinKey] = rawData[coinKey].filter(date => {
                   const dateObj = new Date(date[0]);
                   if (dateObj.getUTCHours() === 1){
                       return date
                   }
               })
    )

    let span = filteredData[keys[0]].length 
    let renderedData = []
    
    for (let i =0; i < span; i++){
        let pricesByDay = {}
        keys.forEach(key => pricesByDay[key] = filteredData[key][i][1] )
        pricesByDay["unix"] = filteredData[keys[0]][i][0]

        renderedData.push(pricesByDay)
    }

    return renderedData
}

export function renderWalletChart(rawData, snapshots){
    return dispatch => {
        dispatch({type: SET_WALLET_CHART, payload: renderChartData(renderRawData(rawData))})
    }
}

export function renderChartData(data) {
    const xAxis = []
    const total = []
    const bitcoin = []
    const ethereum = []
    const cardano = []
    const tether = []
    const solana = []

    data.forEach(day =>{
        let date = new Date(day.unix)
        xAxis.push(date.toLocaleDateString("en-US", {month: 'short', day: 'numeric'}))
        //total.push(day.total);
        bitcoin.push(day.bitcoin);
        ethereum.push(day.ethereum);
        cardano.push(day.cardano);
        tether.push(day.tether);
        solana.push(day.solana);
    })


    return data = {
    labels: xAxis,
    datasets: [
      {
        label: 'total',
        data: total,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Bitcoin',
        hidden: true,
        data: bitcoin,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Ethereum',
        hidden: true,
        data: ethereum,
        borderColor: 'rgb(184, 28, 201)',
        backgroundColor: 'rgba(184, 28, 201, 0.5)',
      },
      {
        label: 'Cardano',
        hidden: true,
        data: cardano,
        borderColor: 'rgb(237, 146, 26)',
        backgroundColor: 'rgba(237, 146, 26, 0.5)',
      },
      {
        label: 'Tether',
        hidden: true,
        data: tether,
        borderColor: 'rgb(26, 237, 135)',
        backgroundColor: 'rgba(26, 237, 135, 0.5)',
      },
      {
        label: 'Solana',
        hidden: true,
        data: solana,
        borderColor: 'rgb(237, 26, 26)',
        backgroundColor: 'rgba(237, 26, 26, 0.5)',
      },
    ],
  }
}