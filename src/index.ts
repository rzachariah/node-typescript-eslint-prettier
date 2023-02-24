const bag = { fruit: "apple", vegetable: "carrot" };
console.log("bag", bag);

const fruitFoods = [
  "apple juice",
  "orange marmalade",
  "pear tart",
  "grape crush",
  "pinot colada",
];
console.log("fruitFoods", fruitFoods);

function sayMyName(name: string): void {
  if (name === "Heisenberg") {
    console.log("You're right 👍");
  } else {
    console.log("You're wrong 👎");
  }
}

sayMyName("Heisenberg");
