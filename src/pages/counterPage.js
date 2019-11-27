import React, { Component } from 'react'
import { connect } from 'react-redux'
import {add,minus,multiply,divide,asyncAdd,asyncMinus,asyncMulti,asyncDivide} from '../actions/countAction'

export class counterPage extends Component {
    render() {
        // console.log(this.props)
        const {count,add,minus,multi,divide,asyncAdd,asyncMinus,asyncMulti,asyncDivide} = this.props
        // console.log(this.props)
        return (
            <div>
                需要改变的数字为:
                <br/>
                {count}
                <br/>
                <button onClick={add}>+</button>
                <button onClick={minus}>-</button>
                {/* 注意如果传值则方法和值写在上方，而不是绑定的时候 */}
                <button onClick={()=>multi(3)}>*</button>
                <button onClick={()=>divide(4)}>/</button>
                <br/>
                异步加减乘除
                <br/>
                <button onClick={asyncAdd}>+</button>
                <button onClick={asyncMinus}>-</button>
                {/* 注意如果传值则方法和值写在上方，而不是绑定的时候 */}
                <button onClick={()=>asyncMulti(3)}>*</button>
                <button onClick={()=>asyncDivide(4)}>/</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    count:state.counter.count
})

const mapDispatchToProps = {
    add:add,
    minus:minus,
    multi:multiply,
    divide:divide,
    asyncAdd:asyncAdd,
    asyncMinus:asyncMinus,
    asyncMulti:asyncMulti,
    asyncDivide:asyncDivide
}

export default connect(mapStateToProps, mapDispatchToProps)(counterPage)
