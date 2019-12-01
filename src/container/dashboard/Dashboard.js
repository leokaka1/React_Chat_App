import React, { Component } from "react";
import { NavBar } from "antd-mobile";
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Tabbar from '../../components/tabBar/Tabbar.js';
import Boss from '../../container/boss/Boss'
import "./Dashboard.css";

function Applicants() {
  return (<div>Applicants</div>)
}

function Message() {
  return (<div>Message</div>)
}

function My() {
  return (<div>My</div>)
}

class Dashboard extends Component {

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
        component: My
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
  user: state.user
})

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)