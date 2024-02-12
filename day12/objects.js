//singleton
//Object.create()

//object literals
const mySymbol = Symbol("key1")
const JSuser = {
    name:"Rahul",
    age:21,
    Location:"Jaipur",
    email:"rahul@gmail.com",
    "fill name":"Rahul Moharana",
    [mySymbol]:"myKey1"


}
console.log(JSuser["email"])
Object.freeze(JSuser);
JSuser.greeting = function(){
    console.log("Hello")
}
