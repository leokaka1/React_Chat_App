import {
  REGISTER_SUCCESS,
  ERR_MSG
} from "../../const/ActionConst";

// 引入跳转工具类
import {getRedirectPath} from '../../util/util'

const initState = {
    redirectTo:'',
    isAuth:false,
    msg:'',
    user:'',
    pwd:'',
    type:''
}

// reducer
export function UserReducer(state = initState, action) {
  switch(action.type){
    case REGISTER_SUCCESS:
        return {...state,msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
    case ERR_MSG:
        return {...state,isAuth:false,msg:action.msg}
    default:
        return state
  } 
}




