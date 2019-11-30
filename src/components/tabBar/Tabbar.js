import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { TabBar } from "antd-mobile";
import {withRouter} from 'react-router-dom'
export class Tabbar extends Component {
  // 效验
  static propTypes = {
    data: propTypes.array.isRequired
  };
  render() {
    const tabbarList = this.props.data.filter(v => !v.hide);
    // 获取pathname
    const pathName = this.props.location.pathname
    // console.log(pathName)
    return (
      <TabBar>
        {tabbarList.map(v => (
            <TabBar.Item
                key={v.path}
                title={v.text}
                icon={{uri:require(`../../images/navi/${v.icon}.png`)}}
                selectedIcon={{uri:require(`../../images/navi/${v.icon}-active.png`)}}
                // 如果当前路径==对象路径，就是选中状态
                selected={pathName === v.path}
                onPress={()=>{
                  this.props.history.push(v.path)
                }}
            >
            </TabBar.Item>
        ))}
      </TabBar>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tabbar))
