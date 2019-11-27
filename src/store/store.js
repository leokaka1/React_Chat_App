import {createStore,compose,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk' //引入异步操作控件
import logger from 'redux-logger' //引入logger日志

import counterReducer from '../reducers/counterReducer'

// 合并reducer
const rootReducers = combineReducers({
    counter:counterReducer
})

// 引入中间件
const middleware = [logger,thunk]
//创建store
const store = createStore(
    rootReducers,
    applyMiddleware(...middleware)
)

export default store
