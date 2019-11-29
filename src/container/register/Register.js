import React, { Component } from "react";
import Logo from "../../components/Logo/Logo";
import { connect } from "react-redux";
import { register } from "../../redux/action/RegisterAction";
import "../login/Login.css";
// 引入布局组件
import {
  List,
  InputItem,
  WhiteSpace,
  WingBlank,
  Button,
  Picker,
} from "antd-mobile";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: [],
      user: "",
      pwd: "",
      confirmPwd: ""
    };
  }

  registerUser() {
    console.log(
      `
        用户名:${this.state.user},
        密码:${this.state.pwd},
        确认密码:${this.state.confirmPwd},
        身份:${this.state.type},
        `
    );
    // 解构出数组中的第一个元素，
    this.props.register({...this.state,type:this.state.type[0]});
  }

  render() {
    const identity = [
      {
        label: "Boss",
        value: "boss"
      },
      {
        label: "Applicants",
        value: "applicants"
      }
    ];

    return (
      <div className="loginContent">
        <Logo></Logo>
        <h2>注册用户</h2>
        {this.props.user.msg ? <p className="err-msg">{this.props.user.msg}</p>:null}
        <List>
          <WingBlank>
            <InputItem onChange={v => this.setState({ user: v })}>
              用户名:
            </InputItem>
            <WhiteSpace />
            <InputItem
              onChange={v => this.setState({ pwd: v })}
              type="password"
            >
              密码:
            </InputItem>
            <WhiteSpace />
            <InputItem
              onChange={v => this.setState({ confirmPwd: v })}
              type="password"
            >
              确认密码:
            </InputItem>
            <WhiteSpace />
            <Picker
              data={identity}
              cols={1}
              value={this.state.type}
              onChange={v => this.setState({ type: v })}
            >
              <List.Item>选择身份:</List.Item>
            </Picker>
            <WhiteSpace size="lg" />

            <Button type="primary" onClick={() => this.registerUser()}>
              注册
            </Button>
          </WingBlank>
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  register
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
