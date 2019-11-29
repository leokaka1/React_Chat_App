import {createStore,applyMiddleware, combineReducers,compose} from 'redux'
import {UserReducer} from '../reducer/UserReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// 合并reducer
const rootReducer = combineReducers({
    user:UserReducer
})

// 引入中间件
const middleWare = [logger,thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(   
    applyMiddleware(...middleWare)
))

export default store