const monsterFactory = (name, age, energySource, catchPhrase) => {
  return {
    name: name,
    age: age,
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    },
  };
};
//   In the monsterFactory function above, it has four parameters and returns an object that has the properties: name, age, energySource, and scare(). To make an object that represents a specific monster like a ghost, we can call monsterFactory with the necessary arguments and assign the return value to a variable:

// Now we have a ghost object as a result of calling monsterFactory() with the needed arguments. With monsterFactory in place, we don’t have to create an object literal every time we need a new monster. Instead, we can invoke the monsterFactory function with the necessary arguments to take over the world make a monster for us!

const ghost = monsterFactory("Ghouly", 251, "ectoplasm", "BOO!");
ghost.scare(); // 'BOO!'

// sample 2

const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
};

const tinCan = robotFactoryy("P-500", true);
tinCan.beep();

// shorthand
function robotFactoryy(model, mobile) {
  return {
    model,
    mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactoryy("P-501", false);
console.log(newRobot.model);
console.log(newRobot.mobile);
