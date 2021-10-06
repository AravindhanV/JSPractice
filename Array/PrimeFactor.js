var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Enter number ", (num) => {
  let factors = new Array();
  while (num % 2 == 0) {
    factors.push(2);
    num = Math.floor(num / 2);
  }
  for (let i = 3; i <= Math.floor(Math.sqrt(num)); i = i + 2) {
    while (num % i == 0) {
      factors.push(i);
      num = Math.floor(num / i);
    }
  }
  if (num > 2) {
    factors.push(num);
  }
  factors.sort();
  console.log("The prime factors are:\n" + factors);
  rl.close();
});
