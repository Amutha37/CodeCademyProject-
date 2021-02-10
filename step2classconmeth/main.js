// 1  create class name Surgeon
//  class name must start with  Uppercase
// 2 create a constructor() method whit 2 parameters for the class
// 3 create name and department properties and set them equeal to your input parameters.
// 4 call the class by creating  2  instance of the Surgeon  assignning it to  2 different const

// At this point, we have a Dog class that spins up objects with name and behavior properties. Below, we will add getters and a method to bring our class to life.

//  #IMPORTANT
// Class method and getter syntax is the same as it is for objects except you can not include commas between methods.
// In the example above, we add getter methods for name and behavior. Notice, we also prepended our property names with underscores (_name and _behavior), which indicate these properties should not be accessed directly. Under the getters, we add a method named .incrementBehavior(). When you call .incrementBehavior() on a Dog instance, it adds 1 to the _behavior property. Between each of our methods, we did not include commas.

// Under the constructor(), create a getter called name and department that returns the value saved to _name. and _department  and so on .// follow instructions
// Under the remainingVacationDays getter, create a method called takeVacationDays that accepts one argument named daysOff.

// Inside of the method, subtract daysOff from the number saved to _remainingVacationDays. Set _remainingVacationDays to the result.

class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon("Curry", "Cardiovascular");
const surgeonDurant = new Surgeon("Durant", "Orthopedics");

// At the bottom of main.js, use console.log() to print the value saved to the name property of the surgeonCurry object.
console.log(surgeonCurry.name); // curry

surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainingVacationDays);
