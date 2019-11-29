const express = require("express");
// 新建一个app
const app = new express();
//跨域
const cors = require('cors')
// 获取body
const bodyParser = require('body-parser')
// cookie
const cookieParser = require('cookie-parser')
// 引入路由
const userRouter = require('./user')
// ---------------------------------------------------------------------
// 使用跨域(必须使用在路由前)
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

// user路由
app.use('/user',userRouter)

// 监听端口
app.listen(5000, () => {
  console.log("5000端口启动成功！！！");
});
