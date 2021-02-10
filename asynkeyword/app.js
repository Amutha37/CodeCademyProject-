function withConstructor(num) {
  return new Promise((resolve, reject) => {
    if (num === 0) {
      resolve("zero");
    } else {
      resolve("not zero");
    }
  });
}

withConstructor(0).then((resolveValue) => {
  console.log(
    ` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`
  );
});

// Write your code below:

// usually

// function nativePromise(){
//   return new Promise((resolve, reject) => {
//       resolve('yay!');
//   })
// }

// with async key
async function withAsync(num) {
  return new Promise((resolve, reject) => {
    if (num === 0) {
      resolve("zero");
    } else {
      resolve("not zero");
    }
  });
}

// async function withAsync(num) {
//    if (num === 0){
//       resolve('zero');
//     } else {
//       resolve('not zero');
//     }
//   };

// Leave this commented out until step 3:

withAsync(100).then((resolveValue) => {
  console.log(
    ` withAsync(100) returned a promise which resolved to: ${resolveValue}.`
  );
});
