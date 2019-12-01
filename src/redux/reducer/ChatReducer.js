import {CHAT_USER} from '../../const/ActionConst'

const initialState = {
    user_data:[]
}

export function ChatReducer(state = initialState,action){
    const data = action.payload
    switch (action.type) {
        case CHAT_USER:
            return {user_data:data}
        default:
            return state
    }
}