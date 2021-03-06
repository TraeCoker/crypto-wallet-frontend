import { SET_COINS, UPDATE_WALLET, UPDATE_WALLET_CHART, COIN_FETCH_ERROR } from "./constants";

export function fetchCurrentPrices(){
    //returns top 10 coins for wallet rendering
    return dispatch => {
      fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
      .then(resp => {
        if (resp.ok) { resp.json()
          .then(data => dispatch({type: SET_COINS, payload: data}))
        } else { resp.json().then(data => console.error(data.error))
        }
      }).catch(err=> dispatch({type: COIN_FETCH_ERROR}));     
    };
  };

  export function updateWallet(transaction, currentCoins){
      return dispatch => {
          console.log(transaction)
          fetch(`http://localhost:3000/wallets/${transaction.id}`, {
            method: "PATCH",
            headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
             },
            body: JSON.stringify({wallet: transaction})
          })
          .then(resp => resp.json())
          .then(data => {
            dispatch({type: UPDATE_WALLET, payload: data});

            dispatch({type: UPDATE_WALLET_CHART, payload: {snapshot: data.snapshot, coins: currentCoins}});
          })
      };

  };