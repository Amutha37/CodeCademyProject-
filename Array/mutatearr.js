let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pisecretne,",
  "Learn",
  "JavaScript",
];
secretMessage.pop();
console.log(secretMessage.length);
secretMessage.push("to", "Program");
console.log(secretMessage);

secretMessage[7] = "right";

console.log(secretMessage);
secretMessage.shift();
secretMessage.unshift("Programming");
// start at idext 6 delete 5 items and replace with 'know'
secretMessage.splice(6, 5, "know");
console.log(secretMessage);
// join(  ) 1st space for start word programming and second word space between the words.
console.log(secretMessage.join(" "));
