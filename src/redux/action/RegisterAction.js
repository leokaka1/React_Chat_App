import {
  ERR_MSG,
  AUTH_SUCCESS,
  USER_INFO,
  LOGOUT
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
        dispatch({ type: AUTH_SUCCESS, payload: { ...res.data.data } });
      } else {
        return dispatch(erroMsg(res.data.msg));
      }
    });
  };
}

// 注销
export function logout(){
  return {type:LOGOUT}
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
        dispatch({ type: AUTH_SUCCESS, payload: { user,type } });
      } else {
        //   如果是之策失败就返回错误信息
        return dispatch(erroMsg(res.data.msg));
      }
    });
  };
}

// 获取用户信息
export function getUserInfo(data) {

  return ({type:USER_INFO,payload:data})
}

// 更新请求
export function getUpdate(data){
  return dispatch=>{
    Axios.post('/user/update',data).then(res=>{
      if (res.status === 200 && res.data.code === 0) {
        //   如果是注册成功就返回成功信息
        // console.log(res.data)
        dispatch({ type: AUTH_SUCCESS, payload: res.data.data});
      } else {
        //   如果是之策失败就返回错误信息
        return dispatch(erroMsg(res.data.msg));
      }
    }).catch(err=>{
      console.log(err)
    })
  }
}
