import React, { Component } from "react";
import PropTypes from "prop-types";
import { WingBlank, Card } from 'antd-mobile'
import {withRouter} from 'react-router-dom'

class UserCard extends Component {
  static propTypes = {
    userList: PropTypes.array.isRequired
  }

  // 跳转去聊天页面
  jumpToChatPage(v){
    console.log("跳转去聊天页面")
    this.props.history.push(`/chatPage/${v._id}`)
  }

  render() {
      // console.log(this.props.userList)
    return (
      <WingBlank>
        {this.props.userList.map(v => (
          <Card key={v._id} onClick={()=>this.jumpToChatPage(v)}>
            <Card.Header
              title={v.user}
              thumb={require(`../../images/${v.avatar}.png`)}
              extra={v.title}
            />
            <Card.Body>
              {/* 换行 */}
              {
                v.type==='boss' ? <div>公司:{v.company}</div> : null
              }
              {v.desc.split("\n").map(v => (
                <div key={v}>{v}</div>
              ))}
              {
                v.type==='boss' ? <div>薪资:{v.salary}</div> : null
              }
            </Card.Body>
          </Card>
        ))}
      </WingBlank>
    );
  }
}

export default withRouter(UserCard)