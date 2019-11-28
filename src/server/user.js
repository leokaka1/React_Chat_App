const express = require('express')
const Router = express.Router()

// 利用Router挂载
Router.get('/info',(req,res)=>{
    return res.send({"code":1})
})


module.exports = Router