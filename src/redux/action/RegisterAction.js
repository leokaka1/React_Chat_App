import {
  ERR_MSG,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS
} from "../../const/ActionConst";
import Axios from "axios";

// 错误的信息提示
function erroMsg(msg) {
  return { type: ERR_MSG, msg: msg };
}

// 登录
export function login({ user, pwd }) {
  if (!user || !pwd) {
    return erroMsg("用户名密码为空！");
  } 

  return dispatch => {
    Axios.post("/user/login", { user, pwd }).then(res => {
      // 打印返回的数据
      // console.log('获取登录信息为===>');
      // console.log(res.data.data);
      if (res.status === 200 && res.data.code === 0) {
        dispatch({ type: LOGIN_SUCCESS, payload: {...res.data.data} });
      } else {
        return dispatch(erroMsg(res.data.msg));
      }
    });
  };
}

// 注册Action
export function register({ user, pwd, confirmPwd, type }) {
  if (!user || !pwd || !type) {
    return erroMsg("用户名密码必须输入");
  }
  if (pwd !== confirmPwd) {
    return erroMsg("密码和确认密码不相同");
  }

  //   用thunk来返回一个dispatch函数，用来处理异步
  return dispatch => {
    // 发送请求
    Axios.post("/user/register", { user, pwd, type }).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        //   如果是注册成功就返回成功信息
        dispatch({ type: REGISTER_SUCCESS, payload: { user, pwd, type } });
      } else {
        //   如果是之策失败就返回错误信息
        return dispatch(erroMsg(res.data.msg));
      }
    });
  };
}
