import {LOGIN,LOGOUT} from '../const/authTitle'
import {Route} from 'react-router-dom'

const initialState = {
    isAuth:false,
    userName:"Leon"
}

const authReducer = (state = initialState,action)=>{
    switch(action.type){
        case LOGIN:{
            return {
                ...state,
                isAuth:true
            }
        }
        case LOGOUT:{
            return {
                ...state,
                isAuth:false
            }
        }
        default :{
            return state
        }
    }
}

export default authReducer