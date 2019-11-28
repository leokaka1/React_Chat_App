import React, { Component } from 'react'
import Logo from '../../components/Logo/Logo' 
// 引入布局组件
import {List,InputItem,WhiteSpace,WingBlank,Button,Picker} from 'antd-mobile'

export default class Register extends Component {

    

    constructor(props){
        super(props)
        this.state = {
            pickerValue: [],
        }
    }

    render() {
        const identity = [{
            'label': 'Boss',
            'value': 'boss'
          }, {
            'label': 'Applicants',
            'value': 'applicants'
          }]
        return (
            <div>
                <Logo></Logo>   
                <h2>我是注册页面</h2> 

                <InputItem>用户名</InputItem>
                <WhiteSpace/>
                <InputItem>密码</InputItem>
                <WhiteSpace/>
                <InputItem>确认密码</InputItem>
                <WhiteSpace/>
                <Picker data={identity} cols={1}  value={this.state.pickerValue} onChange={v=>this.setState({pickerValue:v})}>
                    <List.Item>选择身份</List.Item>
                </Picker>
                
                
            </div>
        )
    }
}
