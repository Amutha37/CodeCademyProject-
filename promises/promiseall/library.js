// Using Promise.all()
// When done correctly, promise composition is a great way to handle situations where asynchronous operations depend on each other or execution order matters. What if we’re dealing with multiple promises, but we don’t care about the order? Let’s think in terms of cleaning again.

// For us to consider our house clean, we need our clothes to dry, our trash bins emptied, and the dishwasher to run. We need all of these tasks to complete but not in any particular order. Furthermore, since they’re all getting done asynchronously, they should really all be happening at the same time!

// To maximize efficiency we should use concurrency, multiple asynchronous operations happening together. With promises, we can do this with the function Promise.all().

// Promise.all() accepts an array of promises as its argument and returns a single promise. That single promise will settle in one of two ways:

// If every promise in the argument array resolves, the single promise returned from Promise.all() will resolve with an array containing the resolve value from each promise in the argument array.
// If any promise from the argument array rejects, the single promise returned from Promise.all() will immediately reject with the reason that promise rejected. This behavior is sometimes referred to as failing fast.
// Let’s look at a code example:

// let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);

// myPromises
//   .then((arrayOfValues) => {
//     console.log(arrayOfValues);
//   })
//   .catch((rejectionReason) => {
//     console.log(rejectionReason);
//   });

const checkAvailability = (itemName, distributorName) => {
  console.log(`Checking availability of ${itemName} at ${distributorName}...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (restockSuccess()) {
        console.log(`${itemName} are in stock at ${distributorName}`);
        resolve(itemName);
      } else {
        reject(
          `Error: ${itemName} is unavailable from ${distributorName} at this time.`
        );
      }
    }, 1000);
  });
};

module.exports = { checkAvailability };

// This is a function that returns true 80% of the time
// We're using it to simulate a request to the distributor being successful this often
function restockSuccess() {
  return Math.random() > 0.2;
}
