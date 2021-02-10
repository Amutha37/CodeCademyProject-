// Accessing and updating properties is fundamental in working with objects. However, there are cases in which we don’t want other code simply accessing and updating an object’s properties. When discussing privacy in objects, we define it as the idea that only certain properties should be mutable or able to change in value.

// Certain languages have privacy built-in for objects, but JavaScript does not have this feature. Rather, JavaScript developers follow naming conventions that signal to other developers how to interact with a property. One common convention is to place an underscore _ before the name of a property to mean that the property should not be altered. Here’s an example of using _ to prepend a property.

const bankAccount = {
  _amount: 1000,
};
//   In the example above, the _amount is not intended to be directly manipulated.
// Even so, it is still possible to reassign

_amount: bankAccount._amount = 1000000;
// sample without getter and setter

const robott = {
  _energyLevel: "high",
  recharge() {
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
  },
};

robott.recharge();

//  using get to retrive but it does more than that
// Inside the getter method, add an if statement to check if this._energyLevel is a number using the typeof operator. If that condition is truthy, return 'My current energy level is ENERGYLEVEL'. Replace ENERGYLEVEL with the value of this._energyLevel.

// Make sure you return the string and not logging it to the console.

// If this._energyLevel isn’t a number it could be that the _energyLevel property was altered. Let’s add a default return statement for when such a scenario arises.

// Add an else statement that returns 'System malfunction: cannot retrieve energy level'.

// Log the result of calling the getter method energyLevel on robot to the console.

// Notice that the method will return a formatted response rather than just accessing a property!

const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === "number") {
      return "My current energy level is " + this._energyLevel;
    } else {
      return "System malfunction: cannot retrieve energy level";
    }
  },
};

console.log(robot.energyLevel);
