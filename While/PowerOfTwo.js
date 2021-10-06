var readline = require('readline');
var rl = readline.createInterface(
    process.stdin, process.stdout);

rl.question('Enter number ', (number) => {
    let index = 0;
    while (index <= number) {
        console.log(index + ":" + Math.pow(number, index));
        index++;
    }
});