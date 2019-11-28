const express = require("express");
const mongoose = require("mongoose");
//跨域
var cors = require('cors')

// 连接数据库
const db_url = "mongodb://leocaoxiaozhu.mynetgear.com:27017/chat_app";
mongoose.connect(db_url);
mongoose.connection.on("connected", () => {
  console.log("☆☆☆☆☆☆☆mongodb is already connected!!!☆☆☆☆☆☆☆☆");
});

// 类似mysql的表,
// 定义一个User模型
const Users = mongoose.model(
  "user",
  new mongoose.Schema({
    user: { type: String, required: true },
    age: { type: Number, required: true }
  })
);

// 新建一个app
const app = new express();
// 使用跨域
app.use(cors())

// 返回一个H1标签
app.get("/", (req, res) => {
  res.send("<h1>hello world!!!!</h1>");
});

app.get("/add", (req, res) => {
  // 增
  Users.create(
    {
      user: "Leon",
      age: 18
    },
    (err, doc) => {
      if (!err) {
        console.log(doc);
        res.send("<h1>添加数据成功</h1>")
      } else {
        console.log(err)
      }
    }
  );
});

// 删
app.get('/delete',(req,res)=>{
    Users.remove({user:"Leon"},(err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            console.log(err)
        }
    })
})

// 改
app.get('/update',(req,res)=>{
    Users.update({user:"Leon"},{'$set':{age:19}},(err,doc)=>{
        if(!err){
            res.send("<h1>信息修改成功</h1>")
        }else{
            console.log("更新数据失败")
        }
    })
})

// 返回数据
app.get("/data", (req, res) => {
  Users.find({}, function(err, doc) {
    if (!err) {
      res.json(doc);
    } else {
        console.log(err);
    }
  });
//   res.json({ name: "Leon", age: 18 });
});

// 监听端口
app.listen(5000, () => {
  console.log("5000端口启动成功！！！");
});
