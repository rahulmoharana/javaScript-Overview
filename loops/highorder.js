const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num)
} //1
// 2
// 3
// 4
// 5

const greeting = "Hello,World"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`)
}

// Each char is o
// Each char is ,
// Each char is W
// Each char is o
// Each char is r
// Each char is l
// Each char is d

// maps
const map = new Map();
map.set('IN',"india")
map.set('US',"United state of america")

console.log(map)
for (const [key,value] of map) {
    console.log(key,":-",value)
}

// { 'IN' => 'india', 'US' => 'United state of america' }

// const myObject = {
//     game1: 'NFS',
//     game2 :'SpiderMan',
// not iteratable
// }
// for (const [key,value] of myObject) {
//     console.log(key,":-",value)
// }