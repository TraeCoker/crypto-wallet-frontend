
export function fetchWalletData(coin, start, end){
    return dispatch => {
      
        console.log(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart/range?vs_currency=usd&from=${start}&to=${end}`)
        fetch(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart/range?vs_currency=usd&from=${start}&to=${end}`)
        .then(resp => resp.json())
        .then(data => dispatch({type: `SET_${coin.toUpperCase()}_SNAP`, payload: data.prices}))
    }
}