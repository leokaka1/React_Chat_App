// 有状态组件
import React, { Component } from 'react'
// 引入ant-design-mobile
import {Button} from'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css'

export default class customer extends Component {
    constructor(props){
        console.log('constructor执行')
        super(props)
        this.state={
            name:["Leon","sisi","Giva"]
        }
        // 在初始化的时候绑定对应的事件
        this.addOneItem1 = this.addOneItem1.bind(this)
    }
    addOneItem(){
        this.setState({
            name:[...this.state.name,"shasha"]
        })
    }

    addOneItem1(){
        this.setState({
            name:[...this.state.name,"shasha"]
        })
    }

    componentWillMount(){
        console.log('componentWillMount执行')
    }

    componentDidMount(){
        console.log('componentDidMount执行')
    }

    // 更新之后展示
    componentWillUpdate(){
        console.log('componentWillUpdate执行')
    }
    
    // 更新之后展示
    componentDidUpdate(){
        console.log('componentDidUpdate执行')
    }
    
    render() {
        console.log('render执行')
        return (
            <div>
                这是一个customer组件
                传值咯：{this.props.name}
                <StatusPart name="受不了了"></StatusPart>
                {/* 渲染列表 */}
                <ul>
                    {
                        this.state.name.map((item,index)=>{
                           return <li key={index}>{item}</li>
                        })
                    }
                </ul>

                {/* 事件绑定 */}
                <button onClick={()=>this.addOneItem()}>箭头函数=>点击添加一条记录</button>
                <br/>
                <button onClick={this.addOneItem1}>bind=>点击添加一条记录</button>
                {/* anit-button */}
                <Button type="primary" style={{width:250}}>点击添加一条记录</Button>
            </div>
        )
    }
}

// 无状态组件,传值
function StatusPart(props){
    const name = props.name
    return (
        <div>
            这是一个无状态组件
            name:{name}
        </div>
    )
}
