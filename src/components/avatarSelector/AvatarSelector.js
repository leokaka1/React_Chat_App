import React, { Component } from 'react'
import {Grid} from 'antd-mobile'

export default class AvatarSelector extends Component {
    constructor(props){
        super(props)
        this.state={
            avatar:'',
        }
    }
    render() {
        // 罗列出图片的数组
        const avatorList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
                            .split(',').map(v=>({
                                icon:require(`../../images/${v}.png`),
                                title:v
                            }))
        return (
            <div>
                 <div style={{margin:15,alignItems:'center'}}>
                     您选择的头像是：
                     {
                        //  老板默认选中了man
                        this.props.identity==='applicant' && !this.state.avatar ? <img src={require('../../images/boy.png')} alt=''/> : <img src={this.state.avatar} alt=''/> 
                     }
                 </div>
                 <Grid data={avatorList} columnNum={5} onClick={ele=>{
                    //  挂载到props上，方便外部拿到头像的名称
                     this.props.selectAvator(ele.title)
                    //  设置选中头像
                     this.setState({
                        avatar:ele.icon 
                     })
                 }}/>
                 
            </div>
        )
    }
}
