// Write your function here:
const tipCalculator = (quality, num) => {
  // let tip = 0;
  switch (quality) {
    case "bad":
      return (num * 5) / 100;
      // tip = total * .5;
      break;
    case "ok":
      return num * 0.15;
      break;
    case "good":
      return num * 0.2;
      break;
    case "excellent":
      return num * 0.3;
      break;
    default:
      return num * 0.18;
  }
};

console.log(`$` + tipCalculator("good", 300));

// Uncomment the line below when you're ready to try out your function
// console.log(tipCalculator('good', 100)) //should return 20

// We encourage you to add more function calls of your own to test your code!
