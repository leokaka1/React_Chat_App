// 定义一个类
class MyApp{
    constructor(){
        this.name = 'React'
    }
    sayHello(){
        console.log(`hello , ${this.name}`)
    }
}

const app = new MyApp()
app.sayHello()


// 定义一个参数的类
class MyApp1{
    constructor(name="Jim"){
        this.name = name
    }

    sayHello(){
        console.log(`this is property ${this.name}`)
    }
}

// 没有给默认值
// const app1 = new MyApp1("Leon")
// 给了默认值之后
const app1 = new MyApp1()
app1.sayHello()