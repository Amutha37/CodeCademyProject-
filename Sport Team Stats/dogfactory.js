// 1.
// Write a function, dogFactory(). It should:

// have 3 parameters: name, breed, and weight (in that order)
// expect name and breed to be strings
// expect weight to be a number
// return an object
// have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in
// dogFactory('Joe', 'Pug', 27)
// // Should return { name: 'Joe', breed: 'Pug', weight: 27 }

// Stuck? Get a hint
// 2.
// Add getters and setters for each of the three properties and change the property names to have an underscore prepended.

// Stuck? Get a hint
// 3.
// Add two methods to your object: .bark() which returns ‘ruff! ruff!’ and .eatTooManyTreats() which should increment the weight property by 1.

const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,

    // get and set name
    get name() {
      return this._name;
    },
    set name(newName) {
      return (this._name = newName);
    },
    // get and set breed
    get name() {
      return this._breed;
    },
    set name(newBreed) {
      return (this._breed = newBreed);
    },
    // get and set weight
    get name() {
      return this._weight;
    },
    set name(newWeight) {
      return (this._weight = newWeight);
    },
    bark() {
      return "ruff! ruff!";
    },
    eatTooManyTreats() {
      this._weight++;
    },
  };
};
console.log(dogFactory("Joe", "Pug", 27));

// Solution to checkpoint 1:
// const dogFactory = (name, breed, weight) => {
//   return {
//     name: name,
//     breed: breed,
//     weight: weight,
//   };
// };
// console.log(dogFactory("Joe", "Pug", 27));

// Solution to checkpoint 2:
// const dogFactory = (name, breed, weight) => {
//   return {
//     _name: name,
//     _breed: breed,
//     _weight: weight,
//     get name() {
//       return this._name;
//     },
//     set name(newName) {
//       this._name = newName;
//     },
//     get breed() {
//       return this._breed;
//     },
//     set breed(newBreed) {
//       this._breed = newBreed;
//     },
//     get weight() {
//       return this._weight;
//     },
//     set weight(newWeight) {
//       this._weight = newWeight;
//     },
//   };
// };
// sampleFac = dogFactory("bar");
//returns "example"
// let exampleObj = bark("example");
// exampleObj.bark();
dogFactory.addDishToCourse("desserts", "ice-cream", 4.0);
console.log(dogFactory("Joe", "Pug", 27));

// exampleObj = objFactory("example");
// exampleObj.param; //
