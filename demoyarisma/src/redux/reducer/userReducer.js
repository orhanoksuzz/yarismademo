
import {UPDATE_USER} from '../actions/userActions'
const InnitialState = {
    socketID:'',
    userName:'',
    userTeam:''
}

export function userReducer(state=InnitialState,action){
    switch (action.type) {
        case UPDATE_USER:
            
            return action.payload.user      
    
        default:
            return state;
           
    }
}



