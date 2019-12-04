import React, { Component } from "react";
import { NavBar } from "antd-mobile";
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Tabbar from '../../components/tabBar/Tabbar.js';
import Boss from '../../container/boss/Boss'
import Applicants from '../../container/applicants/Applicants'
import UserCenter from '../../container/userCenter/UserCenter'
import "./Dashboard.css";
import {getMsgList,recevMsg} from '../../redux/action/ChatAction'
import Message from '../../container/message/Message'


class Dashboard extends Component {

  // 这里请求消息列表是为了获取未读信息
  componentDidMount(){
    // 避免重复切换
    if(!this.props.chat.chatMsg.length){
      this.props.getMsgList()
      this.props.recevMsg()
    }
  }

  render() {
    // console.log(this.props.location)
    const pathName = this.props.location.pathname
    const user = this.props.user
    const naviList = [
      {
        path: '/applicants',
        text: '老板',
        icon: 'job',
        title: '应聘者首页',
        component: Applicants,
        hide: user.type === 'boss'
      },
      {
        path: '/boss',
        text: '应聘者',
        icon: 'boss',
        title: '老板首页',
        component: Boss,
        hide: user.type === 'applicants'
      },
      {
        path: '/message',
        text: '消息',
        icon: 'msg',
        title: "消息",
        component: Message
      },
      {
        path: '/my',
        text: '我的',
        icon: 'user',
        title: "我的",
        component: UserCenter
      },
    ]
    return (
      <div>
        {/* 导航栏 */}
        <NavBar
          mode="dark"
        >
          {
            //   find就是在navilist中找到一个对象并且输出 
            naviList.find(v => v.path === pathName).title
          }
        </NavBar>

        {/* content */}
        <div style={{ marginTop: 15 }}>
          {
            <Switch>
              {
                naviList.map(v=>(
                  <Route key={v.path} path={v.path} component={v.component}></Route>
                ))
              }
            </Switch>
          }
        </div>


        {/* TabBar */}
        <div className='tab-bar'>
          <Tabbar data={naviList}></Tabbar>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  chat:state.chat
})

const mapDispatchToProps = {
  getMsgList,recevMsg
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)