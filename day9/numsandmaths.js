const score = 400;
const balance = new Number(115.22);
console.log(balance.toString());
console.log(balance.toFixed(1));// shows after the decimal values

console.log(balance.toPrecision(3));

const othrrnumber = 23.895;
console.log(othrrnumber.toPrecision(3));//23.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//.....................Maths...............
/*console.log(Math.abs(-4));
console.log(Math.round(123.2));//123
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.2));//4
console.log(Math.min(4,5,6));*/
console.log(Math.random())
console.log(Math.random()*10 +1)

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1))+ min)