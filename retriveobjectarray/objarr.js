// Accessing Properties
// There are two ways we can access an object’s property. Let’s explore the first way— dot notation, ..

// You’ve used dot notation to access the properties and methods of built-in objects and data instances:

let spaceship = {
  homePlanet: "Earth",
  color: "silver",
  "Fuel Type": "Turbo Fuel",
  numCrew: 5,
  flightPath: ["Venus", "Mars", "Saturn"],
};

// Write your code below
const crewCount = spaceship.numCrew;
const planetArray = spaceship.flightPath;
console.log(crewCount);
console.log(planetArray);

// Bracket Notation
// The second way to access a key’s value is by using bracket notation, [ ].

let spaceshipp = {
  "Fuel Type": "Turbo Fuel",
  "Active Mission": true,
  homePlanet: "Earth",
  numCrew: 5,
};

let propName = "Active Mission";

// Write your code below
const isActive = spaceshipp["Active Mission"];
console.log(isActive);

// retrive in js function
// let returnAnyProp = (objectName, propName) => objectName[propName];

// returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'
