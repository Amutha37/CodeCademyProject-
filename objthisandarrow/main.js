// Currently the .checkEnergy() method is not producing the correct output because it is using arrow function syntax.

// Refactor, or change, the method to use a function expression. You can write the function using either longhand or shorthand format.

// After refactoring the method, notice that .checkEnergy() has access to the other internal properties of the robot objec

const robott = {
  energyLevel: 100,
  // checkEnergy:  () => {
  checkEnergy: function () {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  },
};

// using set
robott.checkEnergy();

const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === "number") {
      return this._numOfSensors;
    } else {
      return "Sensors are currently down.";
    }
  },
  set numOfSensors(num) {
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log("Pass in a number that is greater than or equal to 0");
    }
  },
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors);
