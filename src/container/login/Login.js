import React, { Component } from "react";
import Logo from "../../components/Logo/Logo";
import "./Login.css";
import { connect } from "react-redux";
import { login } from "../../redux/action/RegisterAction";
import {Redirect} from 'react-router-dom'

// 引入布局组件
import { InputItem, WhiteSpace, WingBlank, Button } from "antd-mobile";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      pwd: ""
    };
    this.register = this.register.bind(this);
  }

  LoginRequest() {
    // console.log(`账号:${this.state.user},密码:${this.state.pwd}`);
    this.props.login({ ...this.state });
  }

  // 直接跳转到注册页面
  register() {
    this.props.history.push("/register");
  }

  render() {
    return (
      <div className="loginContent">

        {/* 如果请求中有路径，则跳转去对应的页面路径跳转 */}
        {this.props.user.redirectTo ? (
          <Redirect to={this.props.user.redirectTo} />
        ) : null}

        <Logo></Logo>
        <h2>登录</h2>
        {this.props.user.msg ? (
          <p className="err-msg">{this.props.user.msg}</p>
        ) : null}
        <WingBlank>
          {/* 输入框 */}
          <InputItem onChange={v => this.setState({ user: v })}>
            用户:
          </InputItem>
          <WhiteSpace />
          <InputItem onChange={v => this.setState({ pwd: v })} type="password">
            密码:
          </InputItem>
          <WhiteSpace size="xl" />

          <Button type="primary" onClick={() => this.LoginRequest()}>
            登录
          </Button>
          <WhiteSpace></WhiteSpace>
          <Button type="primary" onClick={this.register}>
            注册
          </Button>
        </WingBlank>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
