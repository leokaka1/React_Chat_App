const express = require("express");
const Router = express.Router();
const model = require("./model");
const User = model.getModel("user");

// 引入加密的工具
const utils = require("utility");
// 过滤条件
const filter = {'pwd':0,'__v':0}

// 密码+盐值巩固加密
function ConsolidatePwd(pwd) {
  const conPwdSalt = "88116142_#!@#@$#@$#@123123321dsadjkl~~~";
  // 两层MD5加密+盐值
  return utils.md5(pwd + conPwdSalt);
}

// 用户列表
Router.get("/list", (req, res) => {
  User.find({}, function(err, data) {
    return res.json(data);
  });
});

// 用户注册
Router.post("/register", (req, res) => {
  // 打印相关信息
//   console.log(req.body)
  const { user, pwd, type } = req.body;
  console.log(`注册输入的信息为:账号===>${user},密码=====>${pwd},类型=====>${type}`);
  User.findOne({ user }, (err, data) => {
    if (data) {
      return res.json({ code: 1, msg: "用户名重复" });
    }
    // 如果不重复则直接生成一条记录(并且加密了密码)
    User.create({ user, type, pwd: ConsolidatePwd(pwd) }, (err, data) => {
      if (err) {
        res.json({ code: 1, msg: "后端出错了" });
      } else {
        res.json({ code: 0, msg: "用户注册成功" });
      }
    });
  });
});

// 用户登录
Router.post("/login", (req, res) => {
    const { user, pwd } = req.body;
  console.log(`登录输入的信息为:账号===>${user},密码=====>${pwd}`);
  
  //{'pwd':0}表示不返回密码
  User.findOne({ user, pwd: ConsolidatePwd(pwd) },filter, (err, doc) => {
    if (!doc) {
      return res.json({ code: 1, msg: "用户不存在或者密码错误" });
    } else {
        // 登录成功设置cookie
      res.cookie('userid',doc.id)
      return res.json({ code: 0, msg: "用户登录成功!", data: doc });
    }
  });
});

// 利用Router挂载
Router.get("/info", (req, res) => {
    const {userid} = req.cookies
    // 如果没有找到userid则返回未登录
    if(!userid){
        return res.send({ code: 1 });
    }else{
        User.findOne({_id:userid},filter,(err,data)=>{
            if(err){
                return res.json({code:1,msg:"服务器请求错误"})
            }else{
                return res.json({code:0,data:data})
            }
        })
    }
  
});

module.exports = Router;
