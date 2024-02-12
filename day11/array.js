//arrays
const myArray =[0,1,2,3,4,5,6,7];
const myHero = ["skatiman","Naagraj"];
const myArra = new Array(1,2,2,3,1,4);
console.log(myArray[0]);
myArra.push(8)
myArra.pop();
myArra.unshift(0)//0,1,2,2,3,1,4
myArra.shift();


console.log(myArra.includes(4)); //True.
console.log(myArra.indexOf(4));

const ara = myArra.join() // bind and strings converstion with comma separate

console.log("A",myArra)

//splice modify old array,whereas slice dont's


