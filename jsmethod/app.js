// DEFINE YOUR FUNCTION BELOW:
// BOOTCAMP EXERCISE 40  LAST ELEMENT

const lastElement = (arr) => (arr.length ? arr[arr.length - 1] : null);

// DEFINE YOUR FUNCTION BELOW:
// function lastElement(arr) {
//     if(arr.length === 0) {
//         return null;
//     } else {
//         return arr[arr.length - 1];
//     }
// }

console.log(lastElement([3, 5, 7]));

console.log(lastElement([1]));
console.log(lastElement([]));
