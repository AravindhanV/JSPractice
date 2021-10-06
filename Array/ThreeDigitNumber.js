const NO_OF_NUMBERS = 10;
let numbers = new Array();

for (let count = 0; count < NO_OF_NUMBERS; count++) {
  let number = Math.floor(Math.random() * 900) + 100;
  numbers.push(number);
}

let numbersCopy = [...numbers];
let max = numbersCopy.reduce((a, b) => {
  return Math.max(a, b);
});
numbersCopy.splice(numbersCopy.indexOf(max), 1);
max = numbersCopy.reduce((a, b) => {
  return Math.max(a, b);
});
console.log("Second Largest " + max);

numbersCopy = [...numbers];
let min = numbersCopy.reduce((a, b) => {
  return Math.min(a, b);
});
numbersCopy.splice(numbersCopy.indexOf(min), 1);
min = numbersCopy.reduce((a, b) => {
  return Math.min(a, b);
});
console.log("Second Smallest " + min);
