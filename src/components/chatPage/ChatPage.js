import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import io from "socket.io-client";
import { List, InputItem } from "antd-mobile";
import "./ChatPage.css";
import {connect} from 'react-redux'
import {getMsgList} from '../../redux/action/ChatAction'
const socket = io.connect("localhost:5000");


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
  }

  submit() {
    // console.log(this.state.text)
    // 发送socket
    socket.emit("sendmsg", { text: this.state.text });
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
    user:state.chat
})

const mapDispatchToProps = {
    getMsgList
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ChatPage));
