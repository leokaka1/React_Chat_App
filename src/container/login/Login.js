import React, { Component } from 'react'
import Logo from '../../components/Logo/Logo'
import './Login.css'
import {connect} from 'react-redux'
import {login} from '../../redux/action/RegisterAction'

// 引入布局组件
import {InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile'

class Login extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            user:"",
            pwd:""
        }
        this.register = this.register.bind(this)
    }

    // 直接跳转到注册页面
    register() {
        this.props.history.push('/register')
    }

    render() {
        return (
            <div className="loginContent">
                <Logo></Logo>
                <h2>登录</h2>

                <WingBlank>
                    {/* 输入框 */}
                    <InputItem onChange={v=>this.setState({user:v})}>用户:</InputItem>
                    <WhiteSpace/>
                    <InputItem onChange={v=>this.setState({pwd:v})}>密码:</InputItem>
                    <WhiteSpace size="xl"/>

                    <Button type="primary" onClick={()=>this.props.login(this.state)}>登录</Button>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user:state.user
})

const mapDispatchToProps = {
    login
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)