import React, { Component } from 'react'
import Logo from '../../components/Logo/Logo'
import './Login.css'

// 引入布局组件
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile'

export default class Login extends Component {

    constructor(props) {
        super(props)
        // 
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
                    <InputItem>用户:</InputItem>
                    <WhiteSpace/>
                    <InputItem>密码:</InputItem>
                    <WhiteSpace size="xl"/>

                    <Button type="primary">登录</Button>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

