// const justCoolStuff = (arr1, arr2) => {
//   const inboth = [];
//   numbers.filter((number) => arr1 === arr2);

// };
const justCoolStuff = (arr1, arr2) =>
  arr1.filter((item) => arr2.includes(item));

// another way
// As a function declaration AND using named function w/ a loop:
// function justCoolStuff(firstArray, secondArray) {
//     function isInSecondArray(item){
//           for(let i = 0; i<secondArray.length; i++){
//                 if (secondArray[i] === item){
//                       return true
//                 }
//           }
//           return false
//     }
//     return firstArray.filter(isInSecondArray)
// }

const coolStuff = [
  "gameboys",
  "skateboards",
  "backwards hats",
  "fruit-by-the-foot",
  "pogs",
  "my room",
  "temporary tattoos",
];

const myStuff = [
  "rules",
  "fruit-by-the-foot",
  "wedgies",
  "sweaters",
  "skateboards",
  "family-night",
  "my room",
  "braces",
  "the information superhighway",
];

console.log(justCoolStuff(myStuff, coolStuff));
