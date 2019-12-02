import React, { Component } from "react";
import { connect } from "react-redux";
import { Result, List,WingBlank,Button ,WhiteSpace, Modal} from "antd-mobile";
import browserCookies from 'browser-cookies'
import {logout} from '../../redux/action/RegisterAction'
import {Redirect} from 'react-router-dom'

export class UserCenter extends Component {

  constructor(props){
      super(props)
      this.logOut = this.logOut.bind(this)
  }
  
  logOut(){
    const alert = Modal.alert
    alert('注销', '确定退出吗???', [
        { text: '取消', onPress: () => console.log('cancel') },
        { text: '确定', onPress: () => {
            // 强制删除了cookies
            browserCookies.erase('userid')
            // 退出并且刷新页面
            // window.location.reload()
            // 清除redux中的信息
            this.props.logout()
        }},
      ])
  }

  render() {
    const user = this.props.user;
    const Item = List.Item;
    const Brief = Item.Brief;
    return this.props.user.user ? (
      <div>
        {/* 顶头的 */}
        <Result
          img={
            <img
              src={require(`../../images/${user.avatar}.png`)}
              alt=""
              style={{ width: 50 }}
            ></img>
          }
          title={user.user}
          message={user.company}
        />

        {/* 中间的介绍 */}
        <List renderHeader="简介">
          <Item multipleLine>
            {user.title}
            {user.desc.split("\n").map(v => (
                <Brief key={v}>{v}</Brief>
            ))}
            {user.money ? <Brief>薪资:{user.money}</Brief> : null}
          </Item>
        </List>

        <WhiteSpace size='lg'></WhiteSpace>

        <WingBlank>
            <Button type="primary" onClick={this.logOut}>退出登录</Button>
        </WingBlank>
      </div>
      
    ) : <Redirect to ={this.props.user.redirectTo}/> //          {/* 判断跳转路径，如果是登出了则直接跳转到登录页面 */}
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {logout};

export default connect(mapStateToProps, mapDispatchToProps)(UserCenter);
