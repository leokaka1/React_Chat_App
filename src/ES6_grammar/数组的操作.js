// ES6 数组方法map(),filter(),reduce()和find()

const arr= [1,2,3,4,5]
// 1.map，遍历每一个元素

arr.map((item,index)=>{
    return console.log(`item:${item},index:${index}`)
})

// 2.filter 元素>2的输出
const final = arr.filter(item=>{
    return item>3
})

console.log(final)

// 3.reduce()
// reduce函数有四个参数：之前值，当前值，索引值，数组本身。

/*
array.reduce((previous, current, index, array) =>{

    函数体

}, [initialValue])
*/

const final2 = arr.reduce((sum,i)=>{
    sum += i
    return sum
})

console.log(final2)


//4.find()方法 查找到第一个符合条件的元素，则立刻返回

const final3 = arr.find(item=>{
    // 查找到4立马就返回，且只返回一次
    return item>3
})

console.log(final3)
