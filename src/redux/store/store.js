import {createStore,applyMiddleware, combineReducers,compose} from 'redux'
import {UserReducer} from '../reducer/UserReducer'
// import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {ChatReducer} from '../reducer/ChatReducer'

// 合并reducer
const rootReducer = combineReducers({
    user:UserReducer,
    chat:ChatReducer
})

// 引入中间件
const middleWare = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(   
    applyMiddleware(...middleWare)
))

export default store