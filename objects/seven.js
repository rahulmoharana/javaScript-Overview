// const myNUmbes = [1,2,3,4,5,6]
// const newNUms = myNUmbes.map((num)=>{
//     return num+2
// })
// console.log(newNUms);



// myNUmbes.forEach((num)=>{
//     console.log(num+2)
// })

// chaining

// const newNums = myNUmbes.map((num)=> num * 10)
// .map((num)=>num+1) // it return an resultant array by providing specific operations.
// .filter((num)=> num>= 40)// filter has based on boolean value which is given  by condition in the function
// console.log(newNums)


//Reduce 
// const Mynumbers = [1, 2, 3]
// const myTotal = Mynumbers.reduce(
//     (acc,cur)=>
        
//         acc + cur 

//     ,0 // 0 is the intial value .
// )
// console.log(myTotal)

const shoppingCart = [
    {
        itemName:'js course',
        price:2999
    },
    {
        itemName:'app dev course',
        price:9555
    },
    {
        itemName:'dev course',
        price:4999
    },
]
const priceTopay = shoppingCart.reduce((acc,item)=>{
    return acc + item.price

},0)
console.log(priceTopay)