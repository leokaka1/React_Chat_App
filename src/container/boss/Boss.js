import React, { Component } from 'react'
import { WingBlank, Card } from 'antd-mobile'
import {connect} from 'react-redux'
import {chatUser} from '../../redux/action/ChatAction'

class Boss extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        // 请求对应的列表
        this.props.chatUser()
    }

    render() {
        // console.log(this.props)
        return (
            <WingBlank>
                {
                    this.props.chat.map(v => (
                        <Card key={v._id}>
                            <Card.Header
                                title={v.user}
                                thumb = {require(`../../images/${v.avatar}.png`)}
                                extra = {v.title}
                            />
                            <Card.Body>
                                {/* 换行 */}
                                {
                                    v.desc.split('\n').map(v=>(
                                       <div key={v}>{v}</div>
                                    ))
                                }
                            </Card.Body>
                        </Card>
                    ))
                }
            </WingBlank>
        )
    }
}

const mapStateToProps = (state) => ({
    chat:state.chat.user_data
})

const mapDispatchToProps = {
    chatUser
}


export default connect(mapStateToProps,mapDispatchToProps)(Boss)