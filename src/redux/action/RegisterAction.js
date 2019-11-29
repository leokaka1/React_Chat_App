import { erroMsg } from "../../const/ActionConst";
import Axios from "axios";

export function register({ user, pwd, repeatPwd, type }) {
  if (!user || !pwd || !type) {
    return erroMsg("用户名密码必须输入");
  }
  if (pwd !== repeatPwd) {
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

// 错误的信息提示
function erroMsg(msg) {
  return { type: ERR_MSG, msg: msg };
}
