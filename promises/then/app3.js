// The initial state of an asynchronous promise is pending, but we have a guarantee that it will settle. How do we tell the computer what should happen then? Promise objects come with an aptly named .then() method. It allows us to say, “I have a promise, when it settles, then here’s what I want to happen…”

// In the case of our dishwasher promise, the dishwasher will run then:

// If our promise rejects, this means we have dirty dishes, and we’ll add soap and run the dishwasher again.
// If our promise fulfills, this means we have clean dishes, and we’ll put the dishes away.

const { checkInventory } = require("./library.js");

const order = [
  ["sunglasses", 1],
  ["bags", 2],
];

// Write your code below:

const handleSuccess = (resolveValue) => {
  console.log(resolveValue);
};

const handleFailure = (rejectValue) => {
  console.log(rejectValue);
};
// then uses two call back function as a parameter

checkInventory(order).then(handleSuccess, handleFailure);
