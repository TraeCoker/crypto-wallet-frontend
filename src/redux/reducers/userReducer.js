import { SET_USER, CLEAR_USER, AUTHORIZATION_FAILED } from "../actions/constants";

export default function userReducer(state = {
    isLoggedIn: false,
    currentUser: []
}, action){

    switch (action.type){
        case SET_USER:
            return {isLoggedIn: true, currentUser: action.payload}
        case CLEAR_USER:
            return {isLoggedIn: false, currentUser: []}
        case AUTHORIZATION_FAILED:
            return {...state, errors: action.payload}
        default:
            return state;
        
    }
}