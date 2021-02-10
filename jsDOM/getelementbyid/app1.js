// code for getting  id for individual control
let image = document.getElementById("unicorn");

let heading = document.getElementById("mainheading");

// code for getting  tag name for group  control
let allImages = document.getElementByTagName("img");

for (let img of allImages) {
  innerWidth: red;
  console.log(img.src);
}
// paragraph
let allIPara = document.getElementByTagName("p");

for (let img of allPara) {
  innerWidth: red;
  console.log(img.src);
}
// div
let allDiv = document.getElementByTagName("div");

for (let img of allDiv) {
  innerWidth: red;
  console.log(img.src);
}
// anchor tag
const allAnchor = document.getElementByTagName("a");

for (let img of allAnchor) {
  innerWidth: red;
  console.log(img.src);
}

// class name
const squareClass = document.getElementsByClassName(".square");

for (let img of squareClass) {
  innerWidth: red;
  console.log(img.src);
}

// query selector refering to all in one method  select any element
const idUni = document.querySelector("#unicorn");
const treeClass = document.querySelector(".tree");
// selecting the second image of all the image in the html
const secimg = document.querySelector("img:nth-of-type(2)");

// selecting using attribute
//
const selAttri = document.querySelector('a[title="Java"]');

// selecting using attribute
//
const selAttri = document.querySelector('a[title="Java"]');

// selecting all  anchor tag p
//
const seLink = document.querySelector("p a");
for (let img of seLink) {
  console.log(link.href);
}
// select all Paragraph
const seLink = document.querySelector("p");
// all class
// Your code goes in here!
const doneTodos = document.getElementsByClassName("done");

// particular input type

let checkbox = document.querySelector("input[type='checkbox']");
