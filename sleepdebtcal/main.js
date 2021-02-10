// this works in console.log but showing errow on node run
// Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.
const getSleepHours = (day) => {
  switch (day) {
    case "Monday":
      return 6;
    case "Tuesday":
      return 7;
    case "Wenesday":
      return 5;
    case "Thursday":
      return 6;
    case "Friday":
      return 8;
    case "Saturday":
      return 6;
    case "Sunday":
      return 6;
  }
};
// console.log(getSleepHours('Tuesday'));

const getActualSleepHours = () => {
  // getSleepHours ('Monday');
  return (
    getSleepHours("Monday") +
    getSleepHours("Tuesday") +
    getSleepHours("Wenesday") +
    getSleepHours("Thursday") +
    getSleepHours("Friday") +
    getSleepHours("Saturday") +
    getSleepHours("Sunday")
  );
  console.log(sleepTot);
};

const getIdealSleepHours = (idealHours) => idealHours * 7;

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(9);

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You got more sleep than needed");
  } else {
    console.log("You should get some rest.");
  }
};

calculateSleepDebt();
console.log(getActualSleepHours());
