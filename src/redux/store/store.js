import {createStore,applyMiddleware, combineReducers} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// 合并reducer
const rootReducer = combineReducers({

})

// 引入中间件
const middleWare = [logger,thunk]

const store = createStore(
    rootReducer,
    applyMiddleware(...middleWare)
)

export default store