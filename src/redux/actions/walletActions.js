
export function fetchCurrentPrices(){
    //returns top 10 coins
    return dispatch => {
      fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
      .then(resp => resp.json())
      .then(data => data)
    }
  }