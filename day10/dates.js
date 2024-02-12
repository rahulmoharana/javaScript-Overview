//date

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());


/*
2024-02-07T11:54:12.771Z
Wed Feb 07 2024 17:24:12 GMT+0530 (India Standard Time)
Wed Feb 07 2024
2024-02-07T11:54:12.771Z
2024-02-07T11:54:12.771Z
7/2/2024
7/2/2024, 5:24:12 pm
5:24:12 pm*/

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
// console.log(`Today is ${newDate.getDay()} and this ${newDate.getMonth()}.`);

console.log(newDate.toLocaleDateString('default',{
    weekday: "long",
}))
