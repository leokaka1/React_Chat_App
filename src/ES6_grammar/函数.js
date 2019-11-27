// 1.箭头函数
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


// 2.默认参数(如果name没有传值则会选用默认的赋值Leon3)
const hello3 = (name="Leon3")=>{
    console.log(`hello ${name}`)
}

hello3()


// 3.展开运算符...
// 没有展开运算之前
function hello4(name,age){
    console.log(`name is${name}, age is ${age}`)
}

const arr = ["leon",14]

hello4.apply(null,arr)

// 有了展开运算符之后我们则可以使用...来展开这个数组，所以我们发现输出的结果都是一致的
hello4(...arr)
