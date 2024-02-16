// scope

function one(){
    const userName = "Rahul";
    function two(){
        const website ="youtube"
        console.log(userName);

    }
    two();
   // console.log(website)
}
//one();
if(true){
    const userName = "Rahul";
    if(userName === "hitesh"){
        const website = "youtube"
        console.log(userName + website);
    }
    //console.log(website)
}
//console.log(userName)

// ========================Intresting ==============
console.log(addone(5))
function addone(num){
    return num+1
}

console.log(addtwo(5));
const addtwo = function(num){
    return num + 2
}
