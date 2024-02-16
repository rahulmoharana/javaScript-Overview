// IIFE (Immidiate Invoked Function Execution. )

(function chai(){
    console.log("DB connected.");
})();  // named iffe

((name)=>{
    console.log(`Db connected${name}`);
})("rahul")
//ifee with parameters


