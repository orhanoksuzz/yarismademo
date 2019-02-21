
import {SOCKET_EMIT} from '../actions/socketActions'
const InnitialState = {    
    socketName:'',
    socketParams:''
}

export function socketEmitReducer(state=InnitialState,action){
    switch (action.type) {
        case SOCKET_EMIT:
            return action.payload.emit;            
    
        default:
            return state;
           
    }
}



