import { SET_USER } from "./constants";
import { useSelector } from "react-redux";

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
            console.log(data.user)
        setToken(data.jwt)
        dispatch({type: SET_USER, payload: data.user})
        }
    );
    }
}

export function renderCurrentPrices() {
    const coins = useSelector(state => state.coins)
    const bitcoin = coins.find(c => c.id === "bitcoin").current_price
    return {
        bitcoin
    }
}