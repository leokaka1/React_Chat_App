import { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

 class AuthRoute extends Component {
    componentDidMount(){
        const pathArr = ['/login','/register'];
        const pathName = this.props.location.pathName
        if(pathArr.includes(pathName)){
            // 如果pathname在上述数组中，就不用获取用户信息，否则需要请求用户信息
            return null
        }


        // 请求获取用户信息
        axios.get('/user/info').then(res=>{
            if(res.status===200){
                // console.log(res.data)
                if(res.data.code === 0){
                    // 有登录信息的
                }else{
                    // 没有登录信息直接跳转去登录页
                    // console.log(this.props.history)
                    this.props.history.push('/login')
                }
            }
        })
    }   

    render(){
        return null
    }
}

// 用with
export default withRouter(AuthRoute)