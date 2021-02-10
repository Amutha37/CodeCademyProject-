let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ["really", "very", "basically"];

let unnecessaryWords = ["extremely", "literally", "actually"];
// split them into individual array
const storyWords = story.split(" ");
console.log(storyWords.length);
const betterWords = storyWords.filter((word) => {
  return !unnecessaryWords.includes(word);
});
console.log(betterWords);
let toreally = 0;
let tovery = 0;
let tobasically = 0;

// for (let i = 0; i < betterWords.length; i++) {
for (word of betterWords) {
  //   if (betterWords[i] === "really") {
  if (word === "really") {
    toreally += 1;
    // } else if (betterWords[i] === "very") {
  } else if (word === "very") {
    tovery += 1;
    // } else if (betterWords[i] === "basically") {
  } else if (word === "basically") {
    tobasically += 1;
  }
}
// console.log(`realy count ${toreally}`);
// console.log(`very count ${tovery}`);
// console.log(`basically count ${tobasically}`);

let tosentence = 0;

// for (i = 0; i < betterWords.length; i++) {
// let chr = (betterWords[betterWords[i].length - 1])
// console.log(chr);
// if(chr === '.' || chr === '!') {tosentence += 1
//   }
// }

for (word of betterWords) {
  if (word[word.length - 1] === "." || word[word.length - 1] === "!") {
    tosentence += 1;
  }
}
console.log(`Number of words : ${storyWords.length}`);
console.log(`Number of betterwords; ${betterWords.length}`);
console.log(`No of sentence  : ${tosentence}`);
console.log(`really count : ${toreally}`);
console.log(`very count : ${tovery}`);
console.log(`basically count : ${tobasically}`);

const betterpara = betterWords.join(" ");
console.log(betterpara);
