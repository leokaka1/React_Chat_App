import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {Toast} from 'antd-mobile'

async function clickToRequest() {
  // console.log("!23")
  await axios.get('http://localhost:5000').then(res=>{
    console.log(res)
  })
}

function App() {
  return (
    <div className="App">
      <button onClick={()=>clickToRequest()}>点击请求</button>
    </div>
  );
}

export default App;
