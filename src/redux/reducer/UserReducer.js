import {
  REGISTER_SUCCESS,
  ERR_MSG
} from "../../const/ActionConst";


const initState = {
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
        return {...state,msg:'',isAuth:true,...action.payload}
    case ERR_MSG:
        return {...state,isAuth:false,msg:action.msg}
    default:
        return state
  } 
}




