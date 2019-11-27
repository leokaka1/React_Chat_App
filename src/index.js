import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store/store'
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Link} from 'react-router-dom'


function List2(){
    return <div>这是list2</div>
}

function List3(){
    return <div>这是list3</div>
}

// 这里用provider包裹跟标签
// 路由也必须包裹整个应用
ReactDOM.render(
    <Provider store={store}>
        {/* 整个包裹 */}
        <BrowserRouter>
        <ul>
            <li>
                <Link to="/">列表一</Link>
            </li>
            <li>
                <Link to="/list2">列表二</Link>
            </li>
            <li>
                <Link to="/list3">列表三</Link>
            </li>
        </ul>
        <Route exact path="/" component={App}></Route>
        <Route path="/list2" component={List2}></Route>
        <Route path="/list3" component={List3}></Route>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
