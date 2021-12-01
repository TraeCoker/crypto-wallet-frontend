import { SET_USER } from "../actions/constants";

export default function userReducer(state = {
    isLoggedIn: false,
    currentUser: []
}, action){

    switch (action.type){
        case SET_USER:
        
           return {isLoggedIn: true, currentUser: action.payload.user}

        default:
            return state;
        
    }
}