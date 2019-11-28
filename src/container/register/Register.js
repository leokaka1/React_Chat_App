import React, { Component } from "react";
import Logo from "../../components/Logo/Logo";
import '../login/Login.css'
// 引入布局组件
import {
  List,
  InputItem,
  WhiteSpace,
  WingBlank,
  Button,
  Picker
} from "antd-mobile";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerValue: [],
      userName:'',
      pwd:'',
      confirmPwd:''
    };
  }

  registerUser(){
    console.log(
        `
        用户名:${this.state.userName},
        密码:${this.state.pwd},
        确认密码:${this.state.confirmPwd},
        身份:${this.state.pickerValue},
        `
    )      
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

        <WingBlank>
          <InputItem onChange={v=>this.setState({userName:v})}>用户名:</InputItem>
          <WhiteSpace />
          <InputItem onChange={v=>this.setState({pwd:v})} type="password">密码:</InputItem>
          <WhiteSpace />
          <InputItem onChange={v=>this.setState({confirmPwd:v})} type="password">确认密码:</InputItem>
          <WhiteSpace />
          <Picker
            data={identity}
            cols={1}
            value={this.state.pickerValue}
            onChange={v => this.setState({ pickerValue: v })}
          >
            <List.Item>选择身份:</List.Item>
          </Picker>
          <WhiteSpace size="lg" />

          <Button type="primary" onClick={()=>this.registerUser()}>注册</Button>
        </WingBlank>
      </div>
    );
  }
}
