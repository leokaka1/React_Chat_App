// 1.set(元素不可重复)
const s = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
for (let i of s) {
  console.log(i);// 2 3 5 4
}


// 2.symbol
/*
不重复，不相等。
Symbol函数前不能使用new命令， Symbol 值不是对象，所以不能添加属性。
Symbol 值可以作为标识符，
用于对象的属性名，
就能保证不会出现同名的属性。这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。
*/

// 没有参数的情况
let s1 = Symbol();
let s2 = Symbol();
console.log(s1 === s2) // false
// 有参数的情况
let s3 = Symbol('foo');
let s4 = Symbol('foo');
console.log(s3 === s4) // false


