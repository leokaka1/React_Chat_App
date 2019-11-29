const express = require('express')
const Router = express.Router()

const model = require('./model')
const User = model.getModel('user')

// 用户列表
Router.get('/list',(req,res)=>{
    User.find({},function(err,data){
        return res.json(data)
    })
})

// 用户注册
Router.post('/register',(req,res)=>{
    console.log(req.body)
    const {user,pwd,type} = req.body
    User.findOne({user},(err,data)=>{
        if(data){
            return res.json({code:1,msg:"用户名重复"})
        }
        // 如果不重复则直接生成一条记录
        User.create({user,pwd,type},(err,data)=>{
            if(err){
                res.json({code:1,msg:"后端出错了"})
            }else{
                res.json({code:0,msg:"用户注册成功"})
            }
        })    
    })
})

// 利用Router挂载
Router.get('/info',(req,res)=>{
    return res.send({"code":1})
})


module.exports = Router