var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Enter lower limit ", (lower) => {
  rl.question("Enter Upper limit ", (upper) => {
    let numbers = new Array();
    for (let number = lower; number <= upper; number++) {
      if (number % 11 == 0) {
        numbers.push(number);
      }
    }
    console.log(numbers);
    rl.close();
  });
});
