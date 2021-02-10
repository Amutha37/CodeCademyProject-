let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
};

// Write your code below

let greenEnergy = (obj) => {
  obj["Fuel Type"] = "avocado oil";
};

let remotelyDisable = (obj) => {
  obj.disabled = true;
};

greenEnergy(spaceship);

remotelyDisable(spaceship);

console.log(spaceship);

// sample test

const spaceshipp = {
  homePlanet: "Earth",
  color: "silver",
};

let paintIt = (obj) => {
  obj.color = "glorious gold";
};

paintIt(spaceshipp);

spaceshipp.color; // Returns 'glorious gold'
console.log(spaceshipp);
// sample 2
let spaceship2 = {
  homePlanet: "Earth",
  color: "red",
};
let tryReassignment = (objj) => {
  objj = {
    identified: false,
    "transport type": "flying",
  };
  console.log(objj); // Prints {'identified': false, 'transport type': 'flying'}
};
tryReassignment(spaceship2); // The attempt at reassignment does not work.
spaceship2; // Still returns {homePlanet : 'Earth', color : 'red'};
console.log(spaceship2);
spaceship2 = {
  identified: false,
  "transport type": "flying",
}; // Regular reassignment still works.

console.log(spaceship2);
