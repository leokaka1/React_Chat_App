import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch,} from "react-router-dom";
import store from "./redux/store/store";
import Login from "./container/login/Login";
import Register from "./container/register/Register";
import AuthRoute from "./components/authRoute/AuthRoute";
import BossInfo from './container/bossInfo/BossInfo'
import ApplicantsInfo from './container/applicantsInfo/ApplicantsInfo'
import Dashboard from './container/dashboard/Dashboard'
import "./config";

function MyApp() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <AuthRoute></AuthRoute>
          <Switch>
            {/* bossinfo */}
            <Route path="/bossinfo" component={BossInfo}></Route>
            {/* applicantInfo */}
            <Route path="/applicantsinfo" component={ApplicantsInfo}></Route>
            {/* 引入登录页 */}
            <Route path="/login" component={Login}></Route>
            {/* 引入注册页 */}
            <Route path="/register" component={Register}></Route>
            {/* 如果不加Path，上述没有命中就命中最后一个 */}
            <Route component={Dashboard}/>            
            {/* <Redirect from='/*' to='/login'></Redirect> */}
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
