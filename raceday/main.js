let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly = true;
let age = 20;
if (age > 18 && registerEarly === true) {
  raceNumber += 1000;
}

if (age > 18 && registerEarly === true) {
  console.log(`Your race is at 9:30am and your race number is  ${raceNumber}.`);
} else if (age > 18 && registerEarly === false) {
  console.log(
    `Late adults run at 11:00 am and the race number is ${raceNumber}.`
  );
} else if (age < 18) {
  console.log(
    `Youth registrants run at 12:30pm and the race number is ${raceNumber}.`
  );
} else if ((age = 18)) {
  console.log(`Go to the registration desk to register.`);
}
