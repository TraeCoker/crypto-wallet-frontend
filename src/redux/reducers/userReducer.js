import { CLEAR_USER, SET_USER, CLEAR_USER } from "../actions/constants";

export default function userReducer(state = {
    isLoggedIn: false,
    currentUser: []
}, action){

    switch (action.type){
        case SET_USER:
            return {isLoggedIn: true, currentUser: action.payload}
        case CLEAR_USER:
            return {isLoggedIn: false, currentUser: []}
        default:
            return state;
        
    }
}