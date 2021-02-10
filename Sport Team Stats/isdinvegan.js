//  const isTheDinnerVegan = (food) =>
//  !food.some((vege) => vege.source === "plant");
// check if every element in dinner is plant base
const isTheDinnerVegan = (food) =>
  food.every((vege) => vege.source === "plant");

const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
  { name: "dessert twinkies", source: "unknown" },
];

console.log(isTheDinnerVegan(dinner));
