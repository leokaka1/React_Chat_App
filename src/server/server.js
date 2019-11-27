const express = require('express')
// 新建一个app
const app = new express()

app.get('/',(req,res)=>{
    res.send('<h1>hello world!!!!</h1>')
})

app.listen(5000,()=>{
    console.log('5000端口启动成功！！！')
})
