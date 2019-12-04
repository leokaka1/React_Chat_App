import React, { Component } from "react";
import { connect } from "react-redux";
import { List } from "antd-mobile";

export class Message extends Component {
    // 获取数组最后一个对象元素
  getLastContent(arr){
      return arr[arr.length-1]
  } 
  render() {
    const msgGroup = {};
    this.props.chat.chatMsg.map(v => {
      msgGroup[v.chatId] = msgGroup[v.chatId] || [];
      msgGroup[v.chatId].push(v);
    });

    const contentList = Object.values(msgGroup);
    const userId = this.props.user._id
    // console.log(userId)
    // console.log(msgGroup)
    
    return (
      <div>
        <List>
          {contentList.map(v => {
            const lastItem = this.getLastContent(v)
            
            // console.log(lastItem)
            const showUserId = lastItem.from === userId ? lastItem.to : lastItem.from 
            // console.log(showUserId)
            // 取真正的用户名
            // console.log(this.props.chat.users[showUserId].name)
            //取出显示的头像
            return (
              <List.Item key={lastItem._id} thumb={require(`../../images/${this.props.chat.users[showUserId].avatar}.png`)}>
                {lastItem.content}
                <List.Item.Brief>{this.props.chat.users[showUserId].name}</List.Item.Brief>
              </List.Item>
            );
          })}
        </List>
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
