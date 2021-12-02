import { SET_USER } from "../actions/constants";

export default function userReducer(state = {
    isLoggedIn: false,
    currentUser: []
}, action){

    switch (action.type){
        case SET_USER:
            console.log(action.payload)
        
           return {isLoggedIn: true, currentUser: action.payload}

        default:
            return state;
        
    }
}