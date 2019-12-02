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

// socket_io(最后要用server去监听端口)
const server = require('http').createServer(app)
const io = require('socket.io')(server)
// 模拟socket请求
io.on('connect',(socket)=>{
  console.log('user login')
})


// user路由
app.use('/user',userRouter)

// 监听端口(启动socket监听端口)
server.listen(5000, () => {
  console.log("5000端口启动成功！！！");
});
