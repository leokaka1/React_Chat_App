
import {ADD,MINUS,MULTI,DIV} from '../const/actionTitle'
const initialState = {
    count:1,
}


const counterReducer = (state = initialState,action)=>{
    // console.log(action.type)
    switch(action.type){
        case ADD:{
            // return console.log("增加")
            return {count:state.count+1}
        }
        case MINUS:{
            // return console.log("减少")
            return {count:state.count-1}
        }
        case MULTI:{
            // return console.log("乘")
            return {count:state.count*action.payload}
        }
        case DIV:{
            // return console.log("除")
            return {count:state.count/action.payload}
        }
        default:{
            return state
    } 
  }
}

export default counterReducer