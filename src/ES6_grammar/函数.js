// 箭头函数
// ES5中定义函数

function hello(name){
    console.log('hello ' + name);
}

// 箭头函数
const hello1 = (name)=>{
    console.log(`hello ${name}`)
}

// 如果箭头函数后面只有一句代码我们可以用省略写法
const hello2 = name => console.log(`hello ${name}`)

hello("Leon")
hello1('Leon1')
hello2("Leon2")


