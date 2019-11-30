import React, { Component } from "react";
import { NavBar, TabBar } from "antd-mobile";
import {connect} from 'react-redux'
import "./Dashboard.css";

class Dashboard extends Component {
  constructor(props){
    super(props)
    
  }
      
  render() {
    // console.log(this.props.location)
    const pathName = this.props.location.pathname
    const user = this.props.user  
    const naviList = [
        {
            path:'/applicants',
            text:'应聘者',
            icon:'job',
            title:'应聘者首页',
            // component:
            hide:user.type === 'applicants'
        },
        {
            path:'/boss',
            text:'老板',
            icon:'boss',
            title:'老板首页',
            // component:
            hide:user.type === 'boss'
        },
        {
            path:'/message',
            text:'消息',
            icon:'msg',
            title:"消息",
            // component
        },
        {
            path:'/my',
            text:'我的',
            icon:'user',
            title:"我的",
            // component
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
              naviList.find(v=>v.path===pathName).title
          }
        </NavBar>

        {/* TabBar */}

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    user:state.user
})

const mapDispatchToProps = {
    
}


export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)