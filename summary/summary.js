// primitive types
// 7 type: string,number,null,boolean,symbol,bigInt

// reference types(Non primitive)
// Array,Objects,Functions

const id = Symbol("123");
const anoid = Symbol("123");
console.log(id === anoid);// false (beacuse the return type of both id and anoid is different )




const bigNumber = 5664878684n//primitive type
const heros = ["saktiman","naagraj","doga"]
let obj={
    name:"Rahul",//object declare
    age:22,
}

const fun=function(){
    console.log("hello, world!");// define a fuction and stote that return to the variable.
}

console.log(typeof fun);