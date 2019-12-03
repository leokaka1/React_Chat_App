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
            return {...state,user_data:data}
        case MSG_RECV:
            return {...state,chatMsg:[...state.chatMsg,data.content]}
        case MSG_READ:
            return {...state,user_data:data}
        case MSG_LIST:
            // 获取已读信息
            return {chatMsg:action.payload,unread:action.payload.filter(v=>!v.read).length}
        default:
            return {...state}
    }
}