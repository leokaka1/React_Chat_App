import React, { Component } from 'react'
import {connect} from 'react-redux'
import {chatUser} from '../../redux/action/ChatAction'
import UserCard from '../../components/userCard/UserCard'


class Boss extends Component {

    componentDidMount() {
        // 请求对应的列表
        this.props.chatUser('applicants')
    }

    render() {
        return (
            <UserCard userList={this.props.chat.user_data}></UserCard>
        )
    }
}

const mapStateToProps = (state) => ({
    chat:state.chat
})

const mapDispatchToProps = {
    chatUser
}


export default connect(mapStateToProps,mapDispatchToProps)(Boss)