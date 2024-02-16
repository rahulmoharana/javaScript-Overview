function sayMyname(){
    console.log("R");
    console.log("a")
    console.log("h")
    console.log("u")
    console.log("l")
}
//sayMyname()

function addTwoNumbers(number1,number2){
   return number1 + number2;


}
const result =addTwoNumbers(3,4)//7
console.log("Result:",result);

function loginUserMessage(userName="sam"){
    if(userName === undefined){
        console.log("Please enter a user name")
        return

    }
     return `${userName} just logged in`
}
console.log(loginUserMessage("Rahul"))


