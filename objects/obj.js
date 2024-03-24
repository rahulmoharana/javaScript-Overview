// const myObject ={
//     js:"javascript",
//     cpp:"cpp",
//     rb:"rubby",
// }
// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`)

// }

// const programming = ["js","rb","py","java","cpp"]
// for (const key in programming) {
//    console.log(programming[key])
// }

//for each loop
const coding = ["js","rb","py","java","cpp"]

// coding.forEach(  function greet(val) {
//     console.log(val);
// })
// coding.forEach((val)=>{
//     console.log(val);

// })
// function printme(e){
//     console.log(e);
// }
// coding.forEach(printme)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);

// })

const myCoding =[
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"python"
    },
    {
        languageName:"c",
        languageFileName:"c"
    },
    {
        languageName:"javacript",
        languageFileName:"javacript"
    }
]
myCoding.forEach((item) =>{
     console.log(item.languageName, item.languageFileName);
})
