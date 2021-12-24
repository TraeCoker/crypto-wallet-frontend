import { SET_USER, SET_WALLET_CHART, SET_WALLET, CLEAR_USER, CLEAR_WALLET, AUTHORIZATION_FAILED } from "./constants";
import { renderChartData } from "./chartActions";


const setToken = token => {
    localStorage.setItem("jwt", token);
    localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
};

const removeToken = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("lastLoginTime");
};

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
        .then(r => handleErrors(r))
        .then(data => {
        setToken(data.jwt);
        dispatch({type: SET_USER, payload: data.user});
        dispatch({type: SET_WALLET, payload: [data.user.wallet, data.user.snapshots]});
        dispatch({type: SET_WALLET_CHART, payload: renderChartData(data.user.snapshots)});
        }
    ).catch(error => dispatch({type: AUTHORIZATION_FAILED, payload: "Invalid entry. Please submit valid name, email, and password."}))
    };
};

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
        .then(r => handleErrors(r))
        .then(data => {
        setToken(data.jwt);
        dispatch({type: SET_USER, payload: data.user});
        dispatch({type: SET_WALLET, payload: [data.user.wallet, data.user.snapshots]});
        dispatch({type: SET_WALLET_CHART, payload: renderChartData(data.user.snapshots)});
        }
        ).catch(error => dispatch({type: AUTHORIZATION_FAILED, payload: "Invalid username or password"}))
    };
};

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
    });
};

export function logoutUser(){
    return dispatch => {
        dispatch({type: CLEAR_WALLET});
        dispatch({type: CLEAR_USER});
        removeToken();
    };
};

function handleErrors(response){
    if (!response.ok){
        throw new Error(response.statusText);
    } else {
        return response.json();
    };
};