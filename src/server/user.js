const express = require("express");
const Router = express.Router();
const model = require("./model");
const User = model.getModel("user");
const Chat = model.getModel("chat");

// 引入加密的工具
const utils = require("utility");
// 过滤条件
const filter = { pwd: 0, __v: 0 };

// 密码+盐值巩固加密
function ConsolidatePwd(pwd) {
  const conPwdSalt = "88116142_#!@#@$#@$#@123123321dsadjkl~~~";
  // 两层MD5加密+盐值
  return utils.md5(pwd + conPwdSalt);
}

// 用户列表
Router.get("/list", (req, res) => {
  const { type } = req.query;
  User.find({ type }, function(err, data) {
    return res.json({ code: 0, data: data });
  });
});

// 用户注册
Router.post("/register", (req, res) => {
  // 打印相关信息
  //   console.log(req.body)
  const { user, pwd, type } = req.body;
  console.log(
    `注册输入的信息为:账号===>${user},密码=====>${pwd},类型=====>${type}`
  );
  User.findOne({ user }, (err, data) => {
    if (data) {
      return res.json({ code: 1, msg: "用户名重复" });
    }

    const userModel = new User({ user, type, pwd: ConsolidatePwd(pwd) });
    userModel.save((err, data) => {
      if (err) {
        res.json({ code: 1, msg: "后端出错了" });
      } else {
        const { _id } = data;
        // 反馈cookie
        res.cookie("userid", _id);
        return res.json({ code: 0, data: { ...data } });
      }
    });
    // 如果不重复则直接生成一条记录(并且加密了密码)
    // 如果用了create的话，就拿不到id了，所以得用一个save方法拿到对应的id
    // User.create({ user, type, pwd: ConsolidatePwd(pwd) }, (err, data) => {
    //   if (err) {
    //     res.json({ code: 1, msg: "后端出错了" });
    //   } else {
    //     res.json({ code: 0, msg: "用户注册成功" });
    //   }
    // });
  });
});

// 用户登录
Router.post("/login", (req, res) => {
  const { user, pwd } = req.body;
  console.log(`登录输入的信息为:账号===>${user},密码=====>${pwd}`);

  //{'pwd':0}表示不返回密码
  User.findOne({ user, pwd: ConsolidatePwd(pwd) }, filter, (err, doc) => {
    if (!doc) {
      return res.json({ code: 1, msg: "用户不存在或者密码错误" });
    } else {
      // 登录成功设置cookie
      res.cookie("userid", doc.id);
      return res.json({ code: 0, msg: "用户登录成功!", data: doc });
    }
  });
});

// 获取用户列表
Router.get("/info", (req, res) => {
  const { userid } = req.cookies;
  // 如果没有找到userid则返回未登录
  if (!userid) {
    return res.send({ code: 1 });
  } else {
    User.findOne({ _id: userid }, filter, (err, data) => {
      if (err) {
        return res.json({ code: 1, msg: "服务器请求错误" });
      } else {
        return res.json({ code: 0, data: data });
      }
    });
  }
});

// 完善信息
// Router.post('/update',(req,res)=>{
//     // const body = req.body
//     return console.log(body),
// });

// 更新输入信息
Router.post("/update", (req, res) => {
  console.log(req.body);
  // Uer.findByIdAndUpdate()
  const { userid } = req.cookies;
  if (!userid) {
    return req.json({ code: 1 });
  }

  const body = req.body;
  User.findByIdAndUpdate(userid, body, filter, (err, doc) => {
    /**
         * 举例，因为node对Es6de展开符，支持不完整，所以用了assign去合并对象
         *  var o1 = { a: 1 };
            var o2 = { b: 2 };
            var o3 = { c: 3 };
         *  var obj = Object.assign({},o1,o2,o3);//给一个空对象作为target，这样改变的是空对象
            console.log(obj);// { a: 1, b: 2, c: 3 }
            console.log(o1); // { a: 1}
         */
    // 就是将输入的内容和原始的user，type合并返回
    const data = Object.assign(
      {},
      {
        user: doc.user,
        type: doc.type
      },
      body
    );
    return res.json({ code: 0, data });
  });
});

// 获取用户聊天列表
Router.get("/getMsgList", (req, res) => {
  // const body = req.body
  const { userid } = req.cookies;

  User.find({}, (err, userDoc) => {
    if (!err) {
      // 先设置一个对象
      let users = {};
      userDoc.forEach(v => {
        users[`${v._id}`] = { name: v.user, avatar: v.avatar };
      });
      Chat.find({'$or':[{from:userid},{to:userid}]}, (err, doc) => {
        if (!err) {
          return res.json({ code: 0, msgs: doc, users:users });
        }else{
          console.log(err)
        }
      });
    }
  });
});

module.exports = Router;
