const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

// 引入加密的工具
const utils = require('utility')

// 密码+盐值巩固加密
function ConsolidatePwd(pwd){
    const conPwdSalt = "88116142_#!@#@$#@$#@123123321dsadjkl~~~"
    // 两层MD5加密+盐值
    return utils.md5(pwd+conPwdSalt)
}

// 用户列表
Router.get('/list',(req,res)=>{
    User.find({},function(err,data){
        return res.json(data)
    })
})

// 用户注册
Router.post('/register',(req,res)=>{
    // 打印相关信息
    // console.log(req.body)
    const {user,pwd,type} = req.body
    User.findOne({user},(err,data)=>{
        if(data){
            return res.json({code:1,msg:"用户名重复"})
        }
        // 如果不重复则直接生成一条记录(并且加密了密码)
        User.create({user,type,pwd:ConsolidatePwd(pwd)},(err,data)=>{
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