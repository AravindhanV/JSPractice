const NO_OF_NUMBERS = 10;
let numbers = new Array();

for (let count = 0; count < NO_OF_NUMBERS; count++) {
  let number = Math.floor(Math.random() * 900) + 100;
  numbers.push(number);
  console.log(numbers);
}
