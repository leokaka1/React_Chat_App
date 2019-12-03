import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { List, InputItem } from "antd-mobile";
import "./ChatPage.css";
import {connect} from 'react-redux'
import {getMsgList,sendMsg,recevMsg} from '../../redux/action/ChatAction'

// import io from "socket.io-client";
// const socket = io.connect("localhost:5000");

class ChatPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      msg: []
    };
  }

  componentDidMount() {
    // 监听全局广播
    // socket.on("sendMsg", data => {
    //   //   console.log(data);
    //   this.setState({
    //       msg:[...this.state.msg,data.text]
    //   });
    // });
    this.props.getMsgList()
    this.props.recevMsg()
  }

  submit() {
    // // 发送socket
    // socket.emit("sendmsg", { text: this.state.text });
    // from 谁发起
    const from = this.props.user._id
    // to 发送给谁
    const to = this.props.match.params.user
    // 发送的消息
    const msg = this.state.text
    // 发送消息
    this.props.sendMsg({from,to,msg})
    // 清空输入信息
    this.setState({
      text: " "
    });
  }

  render() {
    return (
      <div>

          {/* 内容 */}
          {
              this.state.msg.map(v=>(
                //   接收内容
                <p key={Math.random()}>{v}</p>
              ))
          }

          {/* 输入组件 */}
        <div className="chatfoter">
          <List>
            <InputItem
              placeholder="请输入"
              value={this.state.text}
              onChange={v => {
                this.setState({ text: v });
              }}
              extra={<span onClick={() => this.submit()}>发送</span>}
            />
          </List>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    user:state.user,
    chat:state.chat
})

const mapDispatchToProps = {
    getMsgList,
    sendMsg,
    recevMsg
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ChatPage));
