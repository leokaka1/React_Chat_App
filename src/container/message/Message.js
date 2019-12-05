import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Badge } from "antd-mobile";

export class Message extends Component {
  // 获取数组最后一个对象元素
  getLastContent(arr) {
    return arr[arr.length - 1];
  }

  // 跳转去聊天页面
  pushIntoChatPage(v){
    // console.log(v)
    this.props.history.push(`/chatPage/${v}`)
  }
  
  render() {
    const msgGroup = {};
    this.props.chat.chatMsg.map(v => {
      msgGroup[v.chatId] = msgGroup[v.chatId] || [];
      msgGroup[v.chatId].push(v);
    });

    // 按时间戳排序
    const contentList = Object.values(msgGroup).sort((a,b)=>{
        const a_last = this.getLastContent(a).createTime
        const b_last = this.getLastContent(b).createTime
        return b_last - a_last
    });

    const userId = this.props.user._id;
    // console.log(userId)
    // console.log(msgGroup)

    return (
      <div>
        {contentList.map(v => {
          const lastItem = this.getLastContent(v);
          // 未读数量显示
          const unread = v.filter(v=>!v.read && v.to === userId).length
          // console.log(lastItem)
          const showUserId =
            lastItem.from === userId ? lastItem.to : lastItem.from;
          // console.log(showUserId)
          // 取真正的用户名
          // console.log(this.props.chat.users[showUserId].name)
          //取出显示的头像
          return (
            <List key={lastItem._id}>
              <List.Item
                thumb={require(`../../images/${this.props.chat.users[showUserId].avatar}.png`)}
                extra = {<Badge text={unread}/>}
                onClick={()=>this.pushIntoChatPage(showUserId)}
              >
                {lastItem.content}
                <List.Item.Brief>
                  {this.props.chat.users[showUserId].name}
                </List.Item.Brief>
              </List.Item>
            </List>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  chat: state.chat,
  user: state.user
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Message);
