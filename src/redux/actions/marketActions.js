import { SET_COINS, COIN_FETCH_ERROR } from "../actions/constants";

export function fetchCoins(){
    return dispatch => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d")
        .then(resp => {
            if (resp.ok) { resp.json()
              .then(data =>dispatch({type: SET_COINS, payload: data}))
            } else { resp.json().then(data => console.error(data.error))
            }
        }).catch(err=> dispatch({type: COIN_FETCH_ERROR}))     
    }
}