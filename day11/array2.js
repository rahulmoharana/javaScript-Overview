const marvelHeroes = ["Thor","Ironman","SpiderMan"];
const DCHeros = ["SuperMan","Falsh","Batman"];
//  marvelHeroes.push(DCHeros);
//  console.log(marvelHeroes);//["Thor","Ironman","SpiderMan",["SuperMan","Falsh","Batman"]]
// console.log(marvelHeroes[3][1]);// flash

// const AllHeros = marvelHeroes.concat(DCHeros);
// console.log(AllHeros);

// concat using spread operator

const allNewHeros = [...marvelHeroes, ...DCHeros];
//console.log(allNewHeros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_anotherArray = anotherArray.flat(Infinity);
console.log(real_anotherArray);

console.log(Array.isArray("Rahul"));
console.log(Array.from("Rahul"))

let score = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score, score2, score3));
