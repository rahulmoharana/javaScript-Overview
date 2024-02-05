// string
const name = "Rahul";
const repoCount =4 ;

console.log(name + repoCount + "value") // this the old style if writing this string data

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`)
  // This is the modern way to print the console contents( ${VarName}  ) is this used in backtics.
  // ways of declare strings....
  const gameName = new String('Rahul--takha--a.h.jh');
  console.log(gameName)// it return an array object of that string..
  console.log(gameName.__proto__);
  console.log(gameName.length);
  console.log(gameName.toUpperCase());
  console.log(gameName.charAt(2));
  console.log(gameName.indexOf('t'));
  let sliic = gameName.slice(2, gameName.length);
  console.log(sliic);
  

  let strings = new String('      rahul      ');
  console.log(strings);
  let newString = strings.trim();
  console.log(newString);

  let url = "https://localhost:rahul%20Mihuhskhlkfs.com";
  
  console.log( url.replace('%20','--'));
  console.log(gameName.split('--'));