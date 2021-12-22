import { SET_COINS } from "../actions/constants";

export function fetchCoins(){
    console.log("c")
    return dispatch => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d")
        .then(resp => resp.json())
        .then(data => {
            console.log("d")
            dispatch({type: SET_COINS, payload: data})
        });

    }
    console.log("e")
}