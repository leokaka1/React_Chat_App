const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false)         //修复控制台报错
// 连接数据库
const db_url = "mongodb://leocaoxiaozhu.mynetgear.com:27017/chat_app";
mongoose.connect(db_url);
mongoose.connection.on("connected", () => {
  console.log("☆☆☆☆☆☆☆mongodb is already connected!!!☆☆☆☆☆☆☆☆");
});

const model = {
  user: {
    user: { type: String, require: true },
    pwd: { type: String, require: true },
    type: { type: String, require: true },
    // 头像
    avatar: { type: String },
    // 个人简介或者职位简介
    desc: { type: String },
    // 职位名
    title: { type: String },
    // 如果是老板职位
    company: { type: String },
    // 薪资
    salary: { type: String }
  }
};

// 批量取出模型
for (let m in model) {
  mongoose.model(m, new mongoose.Schema(model[m]));
}

module.exports = {
  getModel:function(name){
    return mongoose.model(name)
  }
}