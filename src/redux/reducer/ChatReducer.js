import {CHAT_USER,MSG_RECV,MSG_READ,MSG_LIST} from '../../const/ActionConst'

const initialState = {
    user_data:[],
    chatMsg:[],
    users:[],
    unread:0
}

export function ChatReducer(state = initialState,action){
    const data = action.payload
    switch (action.type) {
        case CHAT_USER:
            return {...state,user_data:data}
        case MSG_RECV:
            // 如果是本人发送则未读信息不+1，如果是对方发送则id+1
            return {...state,chatMsg:[...state.chatMsg,action.payload.data],unread:action.payload.data.to===action.payload.userID?state.unread+1:0}
        case MSG_READ:
            return {...state,user_data:data}
        case MSG_LIST:
            // 获取已读信息
            return {...state,chatMsg:action.payload.data.msgs,users:action.payload.data.users,unread:action.payload.data.msgs.filter(v=>!v.read && v.to === action.payload.userId).length}
        default:
            return {...state}
    }
}