// 1.key,values

const obj = {"name":"Leon","age":18,"course":"React开发"}

// 显示所有的key值
console.log(Object.keys(obj));
// 显示所有的values值
console.log(Object.values(obj));
// 压缩成一个对象数组
console.log(Object.entries(obj));

// 2.对属性key的扩展
const name = "leon"

const obj1 = {
    name, //如果key和变量相等，则可以用一个变量名代替
    [name]:"leon1",//计算属性，把name当成一个变量，将外部name的值变为key来使用
    //如果对象里面有方法的时候可以省略function，直接用括号表示一个方法
    hello(){

    }
}

console.log(obj1)