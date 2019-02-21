import {UPDATE_QUESTİON} from '../actions/questionsActions';
const questionsList = [];
export function questionsReducer(state=questionsList,action){
    switch (action.type) {
        case UPDATE_QUESTİON:
            
            let dizi =  state;
            dizi.push(action.payload.question);
           
            return dizi;
    
        default:
            return state;
    }
}
