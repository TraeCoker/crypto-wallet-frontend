import { SET_CHART, SET_WALLET_CHART, SET_RAW_DATA, COIN_FETCH_ERROR } from "./constants";

export function fetchChartData(){
    return dispatch => {
        fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=max&interval=daily")
        .then(resp => resp.json())
        .then(data => dispatch({type: SET_CHART, payload: data.prices}));
    };
};


export function fetchWalletData(coin, start, end){
    return dispatch => {
        fetch(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart/range?vs_currency=usd&from=${start}&to=${end}`)
        .then(resp => {
          if (resp.ok) { resp.json()
            .then(data => dispatch({type: SET_RAW_DATA, payload: [coin, data.prices]}))
          } else { resp.json().then(data => console.error(data.error))
          }
        }).catch(err=> dispatch({type: COIN_FETCH_ERROR})) 
    };
};



export function retrieveWalletChartData(snapshots){
    return dispatch => {
        let today = new Date();
        let start = snapshots[0].unix / 1000;
        let end = today.getTime() / 1000;
        
        dispatch(fetchWalletData("bitcoin", start, end));
        dispatch(fetchWalletData("ethereum", start, end));
        dispatch(fetchWalletData("tether", start, end));
        dispatch(fetchWalletData("cardano", start, end));
        dispatch(fetchWalletData("solana", start, end));

    };
};



export function renderMarketData(data){
    const xAxis = [];
    const yAxis = [];
    data.forEach(array =>{
        let date = new Date(array[0])
        xAxis.push(date.toLocaleDateString("en-US", {month: 'short', day: 'numeric'}))
        yAxis.push(array[1].toFixed(2))
    });


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
  };
};

export function sameDay(d1, d2) {
  return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();
};

export function renderRawData(rawData){
   
    let filteredData = {};
    const keys = Object.keys(rawData);
    const today = new Date();

    keys.forEach(coinKey =>
        filteredData[coinKey] = rawData[coinKey].filter(date => {
                   const dateObj = new Date(date[0]);
                   if (sameDay(dateObj, today) || dateObj.getUTCHours() === 1){
                       return date
                   }
               })
    );

    let span = filteredData[keys[0]].length ;
    let renderedData = [];
    
    for (let i =0; i < span; i++){
        let pricesByDay = {}
       if (keys.every(key => filteredData[key][i])){
          keys.forEach(key => pricesByDay[key] = filteredData[key][i][1])
          pricesByDay["unix"] = filteredData[keys[0]][i][0]
          renderedData.push(pricesByDay)
       }; 
    };
   
    return renderedData
    
};


export function renderWalletChart(rawData, snapshots, coins){
    return dispatch => {
        dispatch({type: SET_WALLET_CHART, payload: renderWalletChartData(renderRawData(rawData), snapshots, coins)})
    };
};

export function renderChartData(data) {
    
    const xAxis = [];
    const total = [];
    const bitcoin = [];
    const ethereum = [];
    const cardano = [];
    const tether = [];
    const solana = [];
    const today = new Date();

    data.forEach(day =>{
        let date = new Date(day.unix)
        sameDay(date, today) ? (
          xAxis.push("Today " + date.toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit'}))
        ) : (
         xAxis.push(date.toLocaleDateString("en-US", {month: 'short', day: 'numeric'}))
        )
        
        total.push(day.total);
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
        data: bitcoin,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Ethereum',
        data: ethereum,
        borderColor: 'rgb(184, 28, 201)',
        backgroundColor: 'rgba(184, 28, 201, 0.5)',
      },
      {
        label: 'Cardano',
        data: cardano,
        borderColor: 'rgb(237, 146, 26)',
        backgroundColor: 'rgba(237, 146, 26, 0.5)',
      },
      {
        label: 'Tether',
        data: tether,
        borderColor: 'rgb(26, 237, 135)',
        backgroundColor: 'rgba(26, 237, 135, 0.5)',
      },
      {
        label: 'Solana',
        data: solana,
        borderColor: 'rgb(237, 26, 26)',
        backgroundColor: 'rgba(237, 26, 26, 0.5)',
      },
    ],
  };
};

export function renderWalletChartData(data, snapshots, coins, update) {
    const snapshotsCopy = snapshots.map(s => s)
    const xAxis = [];
    const total = [];
    const bitcoin = [];
    const ethereum = [];
    const cardano = [];
    const tether = [];
    const solana = [];
    const today = new Date();

    if(update){
      data.push(update);
    }

    data.forEach(day =>{
        let date = new Date(day.unix);
        sameDay(date, today) ? (
          xAxis.push("Today " + date.toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit'}))
        ) : (
         xAxis.push(date.toLocaleDateString("en-US", {month: 'short', day: 'numeric'}))
        )
      

        if (snapshotsCopy.length <= 1 || day.unix < snapshotsCopy[1].unix){
            const btc = day.bitcoin * snapshotsCopy[0].bitcoin;
            const eth = day.ethereum * snapshotsCopy[0].ethereum;
            const ada = day.cardano * snapshotsCopy[0].cardano;
            const usdt = day.tether * snapshotsCopy[0].tether;
            const sol = day.solana * snapshotsCopy[0].solana;
            const sum = btc + eth + ada + usdt + sol;

            bitcoin.push(btc.toFixed(2));
            ethereum.push(eth.toFixed(2));
            cardano.push(ada.toFixed(2));
            tether.push(usdt.toFixed(2));
            solana.push(sol.toFixed(2));
            total.push(sum.toFixed(2));

        } else {
            const btc = day.bitcoin * snapshotsCopy[1].bitcoin;
            const eth = day.ethereum * snapshotsCopy[1].ethereum;
            const ada = day.cardano * snapshotsCopy[1].cardano;
            const usdt = day.tether * snapshotsCopy[1].tether; 
            const sol = day.solana * snapshotsCopy[1].solana;
            const sum = btc + eth + ada + usdt + sol;

            bitcoin.push(btc.toFixed(2));
            ethereum.push(eth.toFixed(2));
            cardano.push(ada.toFixed(2));
            tether.push(usdt.toFixed(2));
            solana.push(sol.toFixed(2));
            total.push(sum.toFixed(2));
            snapshotsCopy.shift();
        }
        
        while(snapshotsCopy[1] && sameDay(new Date(snapshotsCopy[0].unix), new Date(snapshotsCopy[1].unix))){
          xAxis.push(date.toLocaleDateString("en-US", {month: 'short', day: 'numeric'}) + ", " + new Date(snapshotsCopy[0].unix).toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit'}))
          const btc = day.bitcoin * snapshotsCopy[0].bitcoin;
          const eth = day.ethereum * snapshotsCopy[0].ethereum;
          const ada = day.cardano * snapshotsCopy[0].cardano;
          const usdt = day.tether * snapshotsCopy[0].tether; 
          const sol = day.solana * snapshotsCopy[0].solana;
          const sum = btc + eth + ada + usdt + sol;

          bitcoin.push(btc.toFixed(2));
          ethereum.push(eth.toFixed(2));
          cardano.push(ada.toFixed(2));
          tether.push(usdt.toFixed(2));
          solana.push(sol.toFixed(2));
          total.push(sum.toFixed(2));

          snapshotsCopy.shift();
        };
    })
    


    const now = new Date()
    const currentWallet = renderSnapshotData(snapshotsCopy.at(-1), coins);
    xAxis.push("Today " + now.toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit'}));
    bitcoin.push(currentWallet.bitcoin.toFixed(2));
    ethereum.push(currentWallet.ethereum.toFixed(2));
    cardano.push(currentWallet.cardano.toFixed(2));
    tether.push(currentWallet.tether.toFixed(2));
    solana.push(currentWallet.solana.toFixed(2));
    total.push(currentWallet.total.toFixed(2));
    
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
        data: bitcoin,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Ethereum',
        data: ethereum,
        borderColor: 'rgb(184, 28, 201)',
        backgroundColor: 'rgba(184, 28, 201, 0.5)',
      },
      {
        label: 'Cardano',
        data: cardano,
        borderColor: 'rgb(237, 146, 26)',
        backgroundColor: 'rgba(237, 146, 26, 0.5)',
      },
      {
        label: 'Tether',
        data: tether,
        borderColor: 'rgb(26, 237, 135)',
        backgroundColor: 'rgba(26, 237, 135, 0.5)',
      },
      {
        label: 'Solana',
        data: solana,
        borderColor: 'rgb(237, 26, 26)',
        backgroundColor: 'rgba(237, 26, 26, 0.5)',
      },
    ],
  };
};

export function renderSnapshotData(snapshot, currentCoins){
          const updatedAmounts= {};
          const keys = Object.keys(snapshot);
          let total = 0;
        
        keys.forEach(coinKey =>{
          if(coinKey !== "id"){

            if(coinKey === "unix"){
              const date = new Date(snapshot[coinKey])
              updatedAmounts["label"] = "Today " + date.toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit'})
            } else {
              updatedAmounts[coinKey] = snapshot[coinKey] * currentCoins.find(c => c.id === coinKey).current_price  
              total = total += updatedAmounts[coinKey]
               };
          };
        });
        updatedAmounts["total"] = total;
        return updatedAmounts
};

export function renderUpdate(snapshot, coins){
      const update = {};
      const keys = Object.keys(snapshot);

      keys.forEach(coinKey =>{
        if(coinKey !== "id"){
          update[coinKey] = coins[coinKey].current_price
        }
      });
      return update
};