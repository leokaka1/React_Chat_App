import {CHAT_USER} from '../../const/ActionConst'
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
