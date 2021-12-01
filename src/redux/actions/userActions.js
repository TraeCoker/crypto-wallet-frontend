import { SET_COINS, SET_USER } from "./constants";

export function createUser(){
    return dispatch => {
        fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(user),
})
  .then(r => r.json())
  .then(data => {
  //localStorage.setItem("jwt", data.jwt);
   return dispatch({type: SET_USER, payload: data.user})
   }
);
    }
}