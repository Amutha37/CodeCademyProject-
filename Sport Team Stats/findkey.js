//
const key = "keys";
let index = -1;
const findMyKeys = (arr) => {
  const index = arr.findIndex((item) => item === key);

  return index;
};

// another way
// Alternate solution:
// As a function declaration using a loop:
// function findMyKeys(arr) {
//   let index = -1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === key) {
//       index = i;
//       break;
//     }
//   }
//   return index;
// }

const randomStuff = [
  "credit card",
  "screwdriver",
  "receipt",
  "gum",
  "keys",
  "used gum",
  "plastic spoon",
];

console.log(findMyKeys(randomStuff));
