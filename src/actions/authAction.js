import {LOGIN,LOGOUT} from '../const/authTitle'

export function Login (){
    return {
        type:LOGIN
    }
} 

export function Logout (){
    return {
        type:LOGOUT
    }
} 