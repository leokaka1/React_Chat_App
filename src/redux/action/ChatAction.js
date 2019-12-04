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
                dispatch({type:CHAT_USER,payload:res.data.data})
            }
        })
    }
}

// 获取信息列表
export function getMsgList(){
    return (dispatch,getState)=>{
        axios.get('/user/getMsgList').then(res=>{
            // console.log("获取列表打印",res.data)
            // 获取当前的UserID
            const userID = getState().user._id 
            // 把Userid当做参数传入
            dispatch({type:MSG_LIST,payload:{data:res.data,userID}})
        })
    }
}

// socket发送实时消息
export function sendMsg({from,to,msg}){
    return dispatch=>{
        socket.emit("sendmsg", {from,to,msg});
    }
}

// 获取全局消息
export function recevMsg(){
    return (dispatch,getState) =>{
        socket.on('recvMsg',(d)=>{
            // 获取当前的UserID
            const userID = getState().user._id 
            // console.log('resvMsg',d._doc)
            dispatch({type:MSG_RECV,payload:{data:d._doc,userID}})
        })
    }
}
