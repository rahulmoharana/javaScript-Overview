const TinderUser = {}
TinderUser.id = "123abc";
TinderUser.isLoggedIn = false;

const regularUser = {
    email:"soem@gmail.com",
    fullName:{
        userFullname:{
            firstName:"John",
            lastName:"Smith"
        }
    }
}

console.log(regularUser.fullName.userFullname.firstName);

const obj1 = {1:"a",2:"b"};
