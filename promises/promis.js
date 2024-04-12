const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },1000)

})
promiseOne.then(function(){
    console.log("promise consume");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task2');
        resolve()
    },1000)

}).then(function(){
    console.log("async 2 resolveed");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"Chai",email:"chai@gmail.com"})
    }, 1000);

})
promiseThree.then(function(user){
    console.log(user)

})

//Type 1 by 2 then and catvh
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Rahul",email:"chai@gmail.com"})
        }else{
            reject('Error:something went Wrong')
        }
    },1000)
})
promiseFour
.then(function(user){
    console.log(user);
    return user.username;
})
.then(function(username){
    console.log(username)
})
.catch(function(err){
    console.log(err)
})
// tyope 2 by try and catch
const promisFive = new Promise(function(resolve,reject){
    
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript",email:"chai@gmail.com"})
        }else{
            reject('Error:js went Wrong')
        }
    },1000)

})
async function consumepromisFive(){
   try {
    const response = await promisFive
    console.log(response)
   } catch (error) {
    console.log(error)
   }
  
  
}
consumepromisFive()


// async function getAllusers(){
//     try {
//      const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
    
//  } catch (error) {
//     console.log("E:",error);
//  }
// }
// getAllusers()

fetch("https://jsonplaceholder.typicode.com/users").then(function(response){
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error);
})