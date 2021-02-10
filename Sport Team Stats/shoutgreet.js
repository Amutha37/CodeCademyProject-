const shoutGreetings = (arr) => {
  let newArray = [];
  for (i = 0; i < arr.length; i++) {
    newArray.push(arr[i].toUpperCase() + "!");
  }
  return newArray;
};

const greetings = ["hello", "hi", "heya", "oi", "hey", "yo"];
console.log(shoutGreetings(greetings));
