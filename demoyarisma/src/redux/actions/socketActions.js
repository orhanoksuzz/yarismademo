export const SOCKET_EMIT = 'SOCKET_EMIT';

export function socketEmitAction(socketemit){
    return {
        type:SOCKET_EMIT,
        payload:{
            emit:socketemit
        }
    }
}