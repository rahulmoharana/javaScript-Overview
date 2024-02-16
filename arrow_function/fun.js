//arrow fun
const user ={
    userName :"Rahul",
    price : 999,
    welcomeMessage :function(){
       // console.log(`${this.userName},welcome to website`)
       //console.log(this);
    }
}
// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()

//console.log(this)


// function chai(){
//     let userName = "Rahul"
//     console.log(this.userName);
// }

// chai();

const chai = () =>{
    let usename = "Rahul"
    console.log(this);
}

//chai();

//const addTwo= (num1,num2)=>  num1+num2

const addTwo = (num1,num2) =>(num1 + num2)


console.log(addTwo(3,4));
