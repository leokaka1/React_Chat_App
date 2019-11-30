import React, { Component } from "react";
import { connect } from "react-redux";
import {
  NavBar,
  InputItem,
  TextareaItem,
  Button,
  WingBlank,
  WhiteSpace
} from "antd-mobile";
import AvatarSelector from "../../components/avatarSelector/AvatarSelector";
import { Redirect } from "react-router-dom";
import { getUpdate } from "../../redux/action/RegisterAction";
export class ApplicantsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      avatar: "boy"
    };
  }

  clickToChange() {
    // console.log(this.state);
    this.props.getUpdate(this.state)
  }
  render() {
    return (
      <div>
        {/* 跳转路径 */}
        {this.props.user.redirectTo ? (
          <Redirect to={this.props.user.redirectTo} />
        ) : null}
        <NavBar>求职者信息</NavBar>
        {/* grid */}
        {/* 如果是应聘者默认Boy头像 */}
        <AvatarSelector
          identity={"applicant"}
          selectAvator={imageName =>
            this.setState({
              avatar: imageName
            })
          }
        ></AvatarSelector>
        <div style={{ textAlign: "center", margin: 10 }}>个人信息</div>
        <InputItem
          onChange={v =>
            this.setState({
              title: v
            })
          }
        >
          应聘岗位:
        </InputItem>
        <TextareaItem
          title="个人介绍:"
          rows={3}
          onChange={v =>
            this.setState({
              desc: v
            })
          }
        ></TextareaItem>

        <WhiteSpace size="lg" />
        <WingBlank>
          <Button type="primary" onClick={() => this.clickToChange()}>
            确定
          </Button>
        </WingBlank>
        <WhiteSpace size="lg" />
      </div>
    );
  }
}

const mapStateToProps = state => ({user:state.user});

const mapDispatchToProps = {getUpdate};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicantsInfo);
