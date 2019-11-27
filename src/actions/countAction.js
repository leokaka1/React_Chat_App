import {ADD,MINUS,MULTI,DIV} from '../const/actionTitle'

// 加
export function add(){
    return {
        type:ADD,
    }
}

// 减
export function minus(){
    return {
        type:MINUS,
    }
}

// 乘（带参数）
export function multiply(num){
    return{
        type:MULTI,
        payload:num
    }
}

// 除
export function divide(num){
    return{
        type:DIV,
        payload:num
    }
}

// 异步加
export function asyncAdd(){
    return dispatch=>{
        setTimeout(() => {
            dispatch({type:ADD})
        }, 1500);
    }
}

// 异步减
export function asyncMinus(){
    return dispatch=>{
        setTimeout(() => {
            dispatch({type:MINUS})
        }, 1500);
    }
}

// 异步乘
export function asyncMulti(num){
    return dispatch=>{
        setTimeout(() => {
            dispatch({type:MULTI,payload:num})
        }, 1500);
    }
}

// 异步除
export function asyncDivide(num){
    return dispatch=>{
        setTimeout(() => {
            dispatch({type:DIV,payload:num})
        }, 1500);
    }
}