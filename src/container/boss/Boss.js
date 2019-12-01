import React, { Component } from 'react'
import axios from 'axios'
import { WingBlank, Card } from 'antd-mobile'

export default class Boss extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        // 请求对应的列表
        axios.get('/user/list?type=applicants').then(res => {
            // console.log(res)
            if (res.data.code === 0) {
                this.setState({
                    data: res.data.data
                })
            }
        })
    }

    render() {
        // console.log(this.state.data)
        return (
            <WingBlank>
                {
                    this.state.data.map(v => (
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
