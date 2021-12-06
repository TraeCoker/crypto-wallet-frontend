import { SET_USER, SET_WALLET_CHART } from "./constants";
import { renderWalletData } from "./chartActions";


const setToken = token => {
    localStorage.setItem("jwt", token);
    localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
}

export function createUser(user){
    return dispatch => {
        fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        },
        body: JSON.stringify(user),
        })
        .then(r => r.json())
        .then(data => {
        setToken(data.jwt)
        dispatch({type: SET_USER, payload: data.user})
        }
    );
    }
}

export function loginUser(user){
    return dispatch => {
        fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        },
        body: JSON.stringify(user),
        })
        .then(r => r.json())
        .then(data => {
        setToken(data.jwt);
        dispatch({type: SET_USER, payload: data.user});
        dispatch({type: SET_WALLET_CHART, payload: renderWalletData(data.user.snapshots)})
        }
    );
    }
}

export function renderCurrentPrices(coins) {
    const bitcoin = coins.find(c => c.id === "bitcoin").current_price
    const ethereum = coins.find(c => c.id === "ethereum").current_price
    const tether = coins.find(c => c.id === "tether").current_price
    const cardano = coins.find(c => c.id === "cardano").current_price
    const solana = coins.find(c => c.id === "solana").current_price

    return ({
        bitcoin,
        ethereum,
        tether,
        cardano,
        solana,
    })
}