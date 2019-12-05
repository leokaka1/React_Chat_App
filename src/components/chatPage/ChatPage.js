import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { List, InputItem, NavBar, Icon, Grid } from "antd-mobile";
import "./ChatPage.css";
import { connect } from "react-redux";
import { getMsgList, recevMsg, sendMsg,readMsg } from "../../redux/action/ChatAction";
import { getChatId } from "../../util/util";
// import io from "socket.io-client";
// const socket = io.connect("localhost:5000");

class ChatPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      isShowEmoji: false
    };
  }

  componentDidMount() {
    if (this.props.chat.chatMsg.length === 0) {
      this.props.getMsgList();
      this.props.recevMsg();
    }
  }

//   在页面销毁的时候解决未读问题
  componentWillUnmount(){
    // 获取发送的人
    const to = this.props.match.params.user
    this.props.readMsg(to)
  }

  // 修复跑马灯
  fixCarousel(){
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 0);
  }

  submit() {
    // from 谁发起
    const from = this.props.user._id;
    // to 发送给谁
    const to = this.props.match.params.user;
    // 发送的消息
    const msg = this.state.text;
    // 发送消息
    this.props.sendMsg({ from, to, msg });
    // 清空输入信息
    this.setState({
      text: ""
    });
  }

  render() {
    //   对方的Id
    const userId = this.props.match.params.user;
    const users = this.props.chat.users;
    // 获取chat
    const chatId = getChatId(userId, this.props.user._id);
    // console.log("id===>",chatId)
    // 当前聊天内容
    const msg = this.props.chat.chatMsg.filter(v => v.chatId === chatId);
    // console.log("查找到的信息",msg)
    // emoji表情
    const emoji = "😀 😁 😂 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 😗 😙 😚 😇 😐 😑 😶 😏 😣 😥 😮 😯 😪 😫 😴 😌 😛 😜 😝 😒 😓 😔 😕 😲 😷 😖 😞 😟 😤 😢 😭 😦 😧 😨 😬 😰 😱 😳 😵 😡 😠 👦 👧 👨 👩 👴 👵 👶 👱 👮 👲 👳 👷 👸 💂 🎅 👰 👼 💆 💇 🙍 🙎 🙅 🙆 💁 🙋 🙇 🙌 🙏 👤 👥 🚶 🏃 👯 💃 👫 👬 👭 💏 💑 👪"
      .split(" ")
      .map(v => ({ text: v }));
    // console.log(emoji)
    return users[userId] ? (
      <div id="chat-page">
        {/* 导航 */}
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.goBack()}
        >
          {users[userId].name}
        </NavBar>
        {/* 内容 */}
        {msg.map(v => {
          // 获取头像的路径值
          const avatar = require(`../../images/${users[v.from].avatar}.png`);
          // 如果是用户本人
          return v.from === userId ? (
            // <p key={v._id}>对方发送的数据:{v.content}</p>
            <List key={Math.random()}>
              <List.Item thumb={avatar}>{v.content}</List.Item>
            </List>
          ) : (
            <List key={Math.random()}>
              <List.Item
                extra={<img src={avatar} alt=""></img>}
                className="chat_own"
              >
                {v.content}
              </List.Item>
            </List>
          );
        })}
        {/* 输入组件 */}
        <div className="chatfoter">
          <List>
            <InputItem
              placeholder="请输入"
              value={this.state.text}
              onChange={v => {
                this.setState({ text: v });
              }}
              // 一个发送，一个现实emoji
              extra={
                <div>
                  <span
                    style={{ marginRight: 10 }}
                    onClick={() =>
                      // console.log("点击了按钮")
                      {
                        this.setState({ isShowEmoji: !this.state.isShowEmoji })
                        // 解决不能显示表情的问题
                        this.fixCarousel()
                      }
                    }
                  >
                    (表情)
                  </span>
                  <span onClick={() => this.submit()}>发送</span>
                </div>
              }
            />
          </List>
          {/* emogi */}
          {
            this.state.isShowEmoji ? 
            <Grid 
              data={emoji} 
              carouselMaxRow={4} 
              columnNum={9} 
              isCarousel
              onClick={(el)=>{
                this.setState({
                  // 表情添加到输入文字后面
                  text:this.state.text+el.text
                })
              }}
            /> : null
          }
        </div>
      </div>
    ) : null;
  }
}

const mapStateToProps = state => ({
  user: state.user,
  chat: state.chat
});

const mapDispatchToProps = {
  getMsgList,
  sendMsg,
  recevMsg,
  readMsg
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ChatPage)
);
