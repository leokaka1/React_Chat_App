import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {Login} from '../actions/authAction'

 class Auth extends Component {
    render() {
        const {auth,Login} = this.props
        return (
            <div>
                {auth.isAuth ? <Redirect to='/dashboard'></Redirect>:null}
                亲爱的用户
                <br/>
                <button onClick={Login}>请求登录</button>          
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth:state.auth
})

const mapDispatchToProps = {
    Login
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth)

