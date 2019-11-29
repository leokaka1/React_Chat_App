const express = require('express')
const Router = express.Router()

const model = require('./model')
const User = model.getModel('user')

Router.get('/list',(req,res)=>{
    User.find({},function(err,data){
        return res.json(data)
    })
})

// 利用Router挂载
Router.get('/info',(req,res)=>{
    return res.send({"code":1})
})


module.exports = Router