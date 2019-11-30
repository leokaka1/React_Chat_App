import React, { Component } from "react";
import {
  NavBar,
  InputItem,
  TextareaItem,
  Button,
  WingBlank,
  WhiteSpace,
} from "antd-mobile";
import AvatarSelector from "../../components/avatarSelector/AvatarSelector";
import { connect } from "react-redux";
import { getUpdate } from "../../redux/action/RegisterAction";
import { Redirect } from "react-router-dom";

class BossInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      company: "",
      salary: "",
      desc: "",
      avatar: "man"
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
        {/* 跳转路径 */}
        {this.props.user.redirectTo ? (
          <Redirect to={this.props.user.redirectTo} />
        ) : null}

        {/* 导航栏 */}
        <NavBar mode="dark">Boss页面</NavBar>
        {/* 头像选择 */}
        <AvatarSelector
          selectAvator={imagename => {
            console.log(imagename);
            this.setState({ avatar: imagename });
          }}
        ></AvatarSelector>
        <div style={{ textAlign: "center", margin: 10 }}>职位信息</div>
        {/* 输入框 */}
        <InputItem onChange={v => this.onChange("title", v)}>
          招聘职位:
        </InputItem>
        <InputItem onChange={v => this.onChange("company", v)}>
          公司名称:
        </InputItem>
        <InputItem onChange={v => this.onChange("salary", v)}>
          薪资水平:
        </InputItem>
        <TextareaItem
          onChange={v => this.onChange("desc", v)}
          rows={3}
          title="职位要求:"
        />
        <WhiteSpace size="lg" />
        <WingBlank>
          <Button
            type="primary"
            onClick={() => this.props.getUpdate(this.state)}
          >
            确定
          </Button>
        </WingBlank>
        <WhiteSpace size="lg" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  getUpdate
};

export default connect(mapStateToProps, mapDispatchToProps)(BossInfo);
