import {CHAT_USER,MSG_RECV,MSG_READ,MSG_LIST} from '../../const/ActionConst'
import axios from 'axios'

export function chatUser(type){
    return dispatch=>{
        // 请求对应的列表
        axios.get(`/user/list?type=${type}`).then(res => {
            // console.log(res)
            if (res.data.code === 0) {
                // console.log(res.data.data)
                dispatch({type:CHAT_USER,payload:res.data.data})
            }
        })
    }
}


export function getMsgList(){
    return dispatch=>{
        axios.get('/user/getMsgList').then(res=>{
            dispatch({type:MSG_LIST,payload:res.data.data})
        })
    }
}
