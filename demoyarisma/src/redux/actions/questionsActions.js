export const UPDATE_QUESTİON = 'UPDATE_QUESTİON';

export function updateQuestion(newQuestion){
    return {
        type:UPDATE_QUESTİON,
        payload:{
            question:newQuestion
        }
    }
}