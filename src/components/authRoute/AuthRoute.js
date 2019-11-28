import React, { Component } from 'react'
import axios from 'axios'

export default class AuthRoute extends Component {
    componentDidMount(){
        axios.get('/user/info').then(res=>{
            if(res.status==200){
                console.log(res.data)
            }
        })
    }   

    render(){
        return <p>判断跳转的地方</p>
    }
}
