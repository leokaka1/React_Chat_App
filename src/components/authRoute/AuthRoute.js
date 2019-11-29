import { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import {getUserInfo} from '../../redux/action/RegisterAction'
import axios from 'axios'

 class AuthRoute extends Component {
    componentDidMount(){
        console.log(this.props.user)
        const pathArr = ['/login','/register'];
        const pathName = this.props.location.pathName
        if(pathArr.includes(pathName)){
            // 如果pathname在上述数组中，就不用获取用户信息，否则需要请求用户信息
            return null
        }
        // 请求获取用户信息
        axios.get("/user/info").then(res => {
            if (res.status === 200) {
              // console.log(res.data)
              if (res.data.code === 0) {
                // 有登录信息的,直接将数据存入redux中进行控制
                this.props.getUserInfo(res.data.data)
              } else {
                // 没有登录信息直接跳转去登录页
                // console.log(this.props.history)
                this.props.history.push("/login");
              }
            }
          });
    }

    render(){
        return null
    }
}

const mapStateToProps = (state) => ({
    user:state.user
})

const mapDispatchToProps = {
    getUserInfo
}


// 用with
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AuthRoute))