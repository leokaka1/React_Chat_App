const mongoose = require("mongoose");
// 连接数据库
const db_url = "mongodb://leocaoxiaozhu.mynetgear.com:27017/chat_app";
mongoose.connect(db_url);
mongoose.connection.on("connected", () => {
  console.log("☆☆☆☆☆☆☆mongodb is already connected!!!☆☆☆☆☆☆☆☆");
});