var readline = require('readline');
var rl = readline.createInterface(
    process.stdin, process.stdout);

rl.question('Enter number ', (num) => {
    if (num < 0) {
        console.log('Error! Factorial for negative number does not exist.');
    }
    else if (num === 0) {
        console.log('Factorial is 1.');
    }
    else {
        let fact = 1;
        for (i = 1; i <= num; i++) {
            fact *= i;
        }
        console.log('Factorial is:' + fact);
    }
});