// DEFINE YOUR FUNCTION BELOW:

// const returnDay = (num) => {
//   let dayy = "";
//   if (num < 1 || num > 7) {
//     return null;
//   } else {
//     if (num === 1) {
//       return "Monday";
//     } else if (num === 2) {
//       return "Tuesday";
//     } else if (num === 3) {
//       return "Wenesday";
//     } else if (num === 4) {
//       return "Thurday";
//     } else if (num === 5) {
//       return "Friday";
//     } else if (num === 6) {
//       return "Saturday;";
//     } else {
//       return "Sunday";
//     }
//   }
// };

// const days = {
//   1: "Monday",
//   2: "Tuesday",
//   3: "Wednesday",
//   4: "Thursday",
//   5: "Friday",
//   6: "Saturday",
//   7: "Sunday",
// };

// const returnDay = (number) => {
//   if (number < 1 || number > 7) {
//     return null;
//   }
//   return days[number];
// };

// Alternative Solution

const returnDay = (num) => {
  const days = [
    null,
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (num < 1 || num > 7) {
    return days[num];
  }
  return days[num];
};

console.log(returnDay(1));
console.log(returnDay(7));
console.log(returnDay(4));
console.log(returnDay(0));
