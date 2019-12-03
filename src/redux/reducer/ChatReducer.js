import {CHAT_USER,MSG_RECV,MSG_READ,MSG_LIST} from '../../const/ActionConst'

const initialState = {
    user_data:[],
    chatMsg:[],
    unread:0
}

export function ChatReducer(state = initialState,action){
    const data = action.payload
    switch (action.type) {
        case CHAT_USER:
            return {user_data:data}
        case MSG_RECV:
            return {chatMsg:action.payload,unread:action.payload.filter(v=>!v.read).length}
        case MSG_READ:
            return {user_data:data}
        case MSG_LIST:
            return {user_data:data}
        default:
            return state
    }
}