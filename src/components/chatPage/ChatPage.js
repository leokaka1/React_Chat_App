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
    this.props.getMsgList()
    this.props.recevMsg()
    // socket.on('recvMsg',(d)=>{
    //     console.log('resvMsg',d._doc)
    // })
  }

  submit() {
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
      text: ""
    });
  }

  render() {
    console.log("获取信息",this.props.chat.chatMsg)
    return (
      <div>
        {/* 内容 */}
        {
            this.props.chat.chatMsg.map(v=>{
                return <p key={Math.random()}>{v.content}</p>
            })
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
