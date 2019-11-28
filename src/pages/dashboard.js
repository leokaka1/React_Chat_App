import React, { Component } from "react";
import { Link, Route ,Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Login, Logout } from "../actions/authAction";
import App from "../App";

function List2() {
  return <div>这是list2</div>;
}

function List3() {
  return <div>这是list3</div>;
}

class List4 extends React.Component {
  render() {
    console.log(this.props);
    return (
      // 传参
      <div>{this.props.match.params.params}</div>
    );
  }
}

class Dashboard extends Component {
  render() {
    console.log(this.props);
    const { auth, Login, Logout } = this.props;

    // 登录页面
    const loginPage = <Redirect to= '/auth'></Redirect>
    // 登录之后的页面
    const appPage = (
      <div>
        {auth.userName} 您好！！ 登录状态:{auth.isAuth ? " 已登录" : " 未登录"}
        <br />
        <button onClick={Logout}>登出</button>
        <ul>
          <li>
            <Link to="/dashboard">列表一</Link>
          </li>
          <li>
            <Link to="/dashboard/list2">列表二</Link>
          </li>
          <li>
            <Link to="/dashboard/list3">列表三</Link>
          </li>
          <li>
            <Link to="/dashboard/list3">列表四，传参</Link>
          </li>
        </ul>
        <Route path="/dashboard" exact component={App}></Route>
        <Route path="/dashboard/list2" component={List2}></Route>
        <Route path="/dashboard/list3" component={List3}></Route>
        <Route path="/dashboard/:params" component={List4}></Route>
      </div>
    );
    return auth ? appPage : loginPage;
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  Login,
  Logout
};

// export default Dashboard
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
