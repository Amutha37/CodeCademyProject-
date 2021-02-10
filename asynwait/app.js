const brainstormDinner = require("./library.js");

// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
    console.log(`I'm going to make ${meal} for dinner.`);
  });
}
// run the line below just for native version
// nativePromiseDinner();

// async/await version:
async function announceDinner() {
  // Write your code below:

  let meal = await brainstormDinner();

  console.log(`I'm going to make ${meal} for dinner.`);
}
announceDinner();
// nativePromiseDinner();
