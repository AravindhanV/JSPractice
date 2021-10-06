var readline = require('readline');
var rl = readline.createInterface(
    process.stdin, process.stdout);

rl.question('Enter number ', (num) => {
    while (num % 2 == 0) {
        console.log("2 ");
        num = Math.floor(num / 2);
    }
    for (let i = 3;
        i <= Math.floor(Math.sqrt(num));
        i = i + 2) {
        while (num % i == 0) {
            console.log(i + " ");
            num = Math.floor(num / i);
        }
    }
    if (num > 2)
        console.log(num + " ");
    rl.close();
});