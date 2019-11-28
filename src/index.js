import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store/store";
import { Provider } from "react-redux";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";

// function List2() {
//     return <div>这是list2</div>
// }

// function List3() {
//     return <div>这是list3</div>
// }

// class List4 extends React.Component {
//     render() {
//         console.log(this.props)
//         return (
//             // 传参
//             <div>{this.props.match.params.params}</div>
//         )
//     }
// }

// 这里用provider包裹跟标签
// 路由也必须包裹整个应用
ReactDOM.render(
  <Provider store={store}>
    {/* 整个包裹 */}
    <BrowserRouter>
      {/* 统一去协调导航 */}
      {/* <Redirect to="/auth"></Redirect> */}
      <Switch>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/auth" component={Auth}></Route>
      </Switch>

      {/* <ul>
                <li>
                    <Link to="/">列表一</Link>
                </li>
                <li>
                    <Link to="/list2">列表二</Link>
                </li>
                <li>
                    <Link to="/list3">列表三</Link>
                </li>
                <li>
                    <Link to="/list3">列表四，传参</Link>
                </li>
            </ul> */}
      {/* Redirect表示重定向，首次就访问to后的目录目录 */}
      {/* <Redirect to='/list2'></Redirect> */}
      {/* <Switch>
                <Route path="/" exact component={App}></Route>
                <Route path="/list2" component={List2}></Route>
                <Route path="/list3" component={List3}></Route>
                <Route path="/:params" component={List4}></Route>
            </Switch> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
