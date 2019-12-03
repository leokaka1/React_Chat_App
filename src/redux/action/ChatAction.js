import {CHAT_USER,MSG_RECV,MSG_READ,MSG_LIST} from '../../const/ActionConst'
import axios from 'axios'
import io from "socket.io-client";
const socket = io.connect("localhost:5000");

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

// 获取信息列表
export function getMsgList(){
    return dispatch=>{
        axios.get('/user/getMsgList').then(res=>{
            // console.log("获取列表打印",res.data.msgs)
            dispatch({type:MSG_LIST,payload:res.data.msgs})
        })
    }
}

// socket发送实时消息
export function sendMsg({from,to,msg}){
    console.log(msg)
    return dispatch=>{
        socket.emit("sendmsg", {from,to,msg});
    }
}

// 获取全局消息
export function recevMsg(){
    return dispatch =>{
        socket.on('recvMsg',(d)=>{
            console.log('resvMsg',d._doc)
            dispatch({type:MSG_RECV,payload:d._doc})
        })
    }
}
