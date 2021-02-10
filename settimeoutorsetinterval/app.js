// this is call back function which is also higher order function passing a function as a para/argument
// 3000 is equal to 3 sec which is also the second argument for this call setTimeout method
// sample 1 delay time is 3 sec before Hello display
setTimeout(() => {
  console.log("Hello!!!");
}, 3000);

// sample 2 Hello!! and Goodbye!! will display first and after 3 sec ...are you still there will display

console.log("HELLO!!!...");
setTimeout(() => {
  console.log("...are you still there");
}, 3000);
console.log("Goobbye!!");

// setinterval
// set and id to stop the
// let i = 0;

const id = setInterval(() => {
  console.log(Math.rancdom());
}, 2000);
// stop using clearInterval in console

// clearInterval(id);
