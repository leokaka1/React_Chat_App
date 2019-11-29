import { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import {getUserInfo} from '../../redux/action/RegisterAction'

 class AuthRoute extends Component {
    componentDidMount(){
        const pathArr = ['/login','/register'];
        const pathName = this.props.location.pathName
        if(pathArr.includes(pathName)){
            // 如果pathname在上述数组中，就不用获取用户信息，否则需要请求用户信息
            return null
        }
        // 请求获取用户信息
        getUserInfo()
    }   

    render(){
        return null
    }
}

const mapStateToProps = (state) => ({
    user:null
})

const mapDispatchToProps = {
    getUserInfo
}


// 用with
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AuthRoute))