import { SIGNUP_USER } from "../actions/constants";

export default function userReducer(state = [], action){
    switch (action.type){
        case SET_USER:
            console.log(action.payload);
            return action.payload

        default:
            return state;
        
    }
}