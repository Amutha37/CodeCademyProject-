// Avoiding Common Mistakes
// Promise composition allows for much more readable code than the nested callback syntax that preceded it. However, it can still be easy to make mistakes. In this exercise, we’ll go over two common mistakes with promise composition.

// Mistake 1: Nesting promises instead of chaining them.

// returnsFirstPromise()
// .then((firstResolveVal) => {
//   return returnsSecondValue(firstResolveVal)
//     .then((secondResolveVal) => {
//       console.log(secondResolveVal);
//     })
// })

//

const { checkInventory, processPayment, shipOrder } = require("./library.js");

const order = {
  items: [
    ["sunglasses", 1],
    ["bags", 2],
  ],
  giftcardBalance: 79.82,
};

checkInventory(order)
  .then((resolvedValueArray) => {
    // Write the correct return statement here:
    return processPayment(resolvedValueArray);
  })
  .then((resolvedValueArray) => {
    // Write the correct return statement here:
    return shipOrder(resolvedValueArray);
  })
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });
