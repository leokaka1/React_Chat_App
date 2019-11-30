import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./redux/store/store";
import Login from "./container/login/Login";
import Register from "./container/register/Register";
import AuthRoute from "./components/authRoute/AuthRoute";
import BossInfo from './container/bossInfo/BossInfo'
import "./config";

function MyApp() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <AuthRoute></AuthRoute>
          <Switch>
            {/* Test */}
            <Route path="/bossinfo" component={BossInfo}></Route>
            {/* 引入登录页 */}
            <Route path="/login" component={Login}></Route>
            {/* 引入注册页 */}
            <Route path="/register" component={Register}></Route>
            {/* <Redirect path="/login"></Redirect> */}
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(MyApp(), document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
