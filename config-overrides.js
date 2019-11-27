const { override, fixBabelImports } = require("customize-cra");
// 按需加载ant-design配置
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    style: "css"
  })
);
