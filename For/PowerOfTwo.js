
var readline = require('readline');
var rl = readline.createInterface(
    process.stdin, process.stdout);

rl.question('Enter number ', (num) => {
    for (let power = 0; power <= num; power++) {
        console.log(power + ": " + Math.pow(2, power));
    }
    rl.close();
});