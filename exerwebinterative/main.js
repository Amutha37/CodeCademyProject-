// const document.querySelector(h1;
let h1 = document.querySelector("h1");
h1.innerHTML = "Most popular TV show searches in 2016";
let fourth = document.getElementById("fourth");
fourth.innerHTML = "Fourth element";
document.body.style.backgroundColor = "#201F2E";

// add a new item into the list
let newDestination = document.createElement("li");

newDestination.id = "oaxaca";

newDestination.innerHTML = "Kishen, Mexico";

document.getElementById("more-destinations").appendChild(newDestination);

// button function
let element = document.querySelector("button");

function turnButtonRed() {
  element.style.backgroundColor = "red";
  element.style.color = "white";
  element.innerHTML = "Red Button";
}
element.onclick = turnButtonRed;
