/* set letter key variables */
const letterNoteOne = document.getElementById("letter-note-one");
const letterNoteTwo = document.getElementById("letter-note-two");
const letterNoteThree = document.getElementById("letter-note-three");
const letterNoteFour = document.getElementById("letter-note-four");
const letterNoteFive = document.getElementById("letter-note-five");
const letterNoteSix = document.getElementById("letter-note-six");

/* word key variables */
const wordOne = document.getElementById("word-one");
const wordTwo = document.getElementById("word-two");
const wordThree = document.getElementById("word-three");
const wordFour = document.getElementById("word-four");
const wordFive = document.getElementById("word-five");
const wordSix = document.getElementById("word-six");
// The keys and notes variables store the piano keys
const keys = [
  "c-key",
  "d-key",
  "e-key",
  "f-key",
  "g-key",
  "a-key",
  "b-key",
  "high-c-key",
  "c-sharp-key",
  "d-sharp-key",
  "f-sharp-key",
  "g-sharp-key",
  "a-sharp-key",
];
const notes = [];
keys.forEach(function (key) {
  notes.push(document.getElementById(key));
});

// Write named functions that change the color of the keys below
// step 1
const keyPlay = (event) => {
  event.target.style.backgroundColor = "blue";
};
// step 2
const keyReturn = (event) => {
  event.target.style.backgroundColor = "";
};
// step 3 4  5
const startPlay = (note) => {
  note.addEventListener("mousedown", keyPlay);
  note.addEventListener("mouseup", keyReturn);

  // another way
  //     note.onmousedown = changeNoteColorToRed;
  //   note.onmouseup = changeNoteColorToDef;
  // note.onmousedown = function () {
  //     keyPlay(event);
};
notes.forEach(startPlay);
// Write a named function with event handler properties

// Write a loop that runs the array elements through the function

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById("first-next-line");
let nextTwo = document.getElementById("second-next-line");
let nextThree = document.getElementById("third-next-line");
let startOver = document.getElementById("fourth-next-line");

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById("column-optional");

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

// Write anonymous event handler property and function for the first progress button
// nextOne.onclick = function () {
//     nextTwo.hidden = false;
//     nextOne.hidden = true;
//     document.getElementById("letter-note-five").innerHTML = "D";
//     document.getElementById("letter-note-six").innerHTML = "C";
//   };
// lineTwo.onclick = () => {
//     lineTwo.hidden = true;
//     lineThree.hidden = false;
//     letterNoteFive.innerHTML = "D";
//     letterNoteSix.innerHTML = "C";
//   };

//   lineThree.onclick = () => {
//     lineThree.hidden = true;
//     lineFour.hidden = false;
const lineTwo = () => {
  nextTwo.hidden = false;
  nextOne.hidden = true;
  letterNoteFive.innerHTML = "D";
  letterNotesix.innerHTML = "C";
};
const lineThree = () => {
  nextThree.hidden = false;
  nextTwo.hidden = true;
  wordFive.innerHTML = "DEAR";
  wordSix.innerHTML = "FRI-";

  lastLyric.style.display = "inline-block";
  letterNoteThree.innerHTML = "G";
  letterNoteFour.innerHTML = "E";
  letterNoteFive.innerHTML = "C";
  letterNoteSix.innerHTML = "B";
};
const lineFour = () => {
  startOver.hidden = false;
  nextThree.hidden = true;

  wordOne.innerHTML = "HAP-";
  wordTwo.innerHTML = "PY";
  wordThree.innerHTML = "BIRTH";
  wordFour.innerHTML = "DAY";
  wordFive.innerHTML = "TO";
  wordSix.innerHTML = "YOU!";

  letterNoteOne.innerHTML = "F";
  letterNoteTwo.innerHTML = "F";
  letterNoteThree.innerHTML = "E";
  letterNoteFour.innerHTML = "C";
  letterNoteFive.innerHTML = "D";
  letterNoteSix.innerHTML = "C";
  lastLyric.style.display = "none";
};
nextOne.addEventListener("click", lineTwo);
nextTwo.addEventListener("click", lineThree);
nextThree.addEventListener("click", lineFour);
// Write anonymous event handler property and function for the second progress button

// Write anonymous event handler property and function for the third progress button

// This is the event handler property and function for the startOver button
startOver.onclick = function () {
  nextOne.hidden = false;
  startOver.hidden = true;
  document.getElementById("word-one").innerHTML = "HAP-";
  document.getElementById("letter-note-one").innerHTML = "G";
  document.getElementById("word-two").innerHTML = "PY";
  document.getElementById("letter-note-two").innerHTML = "G";
  document.getElementById("word-three").innerHTML = "BIRTH-";
  document.getElementById("letter-note-three").innerHTML = "A";
  document.getElementById("word-four").innerHTML = "DAY";
  document.getElementById("letter-note-four").innerHTML = "G";
  document.getElementById("word-five").innerHTML = "TO";
  document.getElementById("letter-note-five").innerHTML = "C";
  document.getElementById("word-six").innerHTML = "YOU!";
  document.getElementById("letter-note-six").innerHTML = "B";
};
