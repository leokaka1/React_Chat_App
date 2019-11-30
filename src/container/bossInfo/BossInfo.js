import React, { Component } from "react";
import { NavBar, InputItem, TextareaItem } from "antd-mobile";
import AvatarSelector from "../../components/avatarSelector/AvatarSelector";

export default class BossInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      company: "",
      salary: "",
      desc: "",
      avatar:""
    };
  }

  onChange(key, val) {
    this.setState({
      [key]: val
    });
  }
  render() {
    return (
      <div>
        {/* 导航栏 */}
        <NavBar mode="dark">Boss页面</NavBar>
        {/* 头像选择 */}
        <AvatarSelector selectAvator={(imagename)=>{
            console.log(imagename)
            this.setState({avatar:imagename})
        }}></AvatarSelector>
        {/* 输入框 */}
        <InputItem onChange={v => this.onChange("title", v)}>
          招聘职位
        </InputItem>
        <InputItem onChange={v => this.onChange("company", v)}>
          公司名称
        </InputItem>
        <InputItem onChange={v => this.onChange("salary", v)}>
          薪资水平
        </InputItem>
        <TextareaItem
          onChange={v => this.onChange("desc", v)}
          rows={3}
          autoHeight
          title="职位要求"
        />
      </div>
    );
  }
}
