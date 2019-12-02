import {
  AUTH_SUCCESS,
  ERR_MSG,
  USER_INFO,
  LOGOUT
} from "../../const/ActionConst";

// 引入跳转工具类
import { getRedirectPath } from "../../util/util";

const initState = {
  redirectTo: "",
  msg: "",
  user: "",
  type: ""
};

// reducer
export function UserReducer(state = initState, action) {
  switch (action.type) {
    case USER_INFO:
      return { ...state, ...action.payload };
    case AUTH_SUCCESS: 
      return {
        ...state,
        msg: "",
        redirectTo: getRedirectPath(action.payload),
        ...action.payload
      };
    // case REGISTER_SUCCESS:
    //     return {...state,msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
    // case LOGIN_SUCCESS:
    //     return {...state,msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
    case ERR_MSG:
      return { ...state, isAuth: false, msg: action.msg };
    case LOGOUT:
      return {...initState,redirectTo:'/login'}
    default:
      return state;
  }
}
