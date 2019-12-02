import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import io from 'socket.io-client'
class ChatPage extends Component {
    componentDidMount(){
        const socket = io.connect('localhost:5000')
    }
    render() {
        console.log(this.props.match.params)
        return (
            <div>
                这是组件
                {
                    this.props.match.params.user
                }
            </div>
        )
    }
}


export default withRouter(ChatPage)
