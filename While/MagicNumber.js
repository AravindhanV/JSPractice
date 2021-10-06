var readline = require('readline');
var rl = readline.createInterface(
    process.stdin, process.stdout);
var low = 1;
var high = 100;

rl.question('Think of number between 1 to 100 ', (num) => {
    while (low <= high) {
        mid = (low + high) / 2;
        if (mid == num) {
            console.log("Magic number is " + mid);
        } else if (num < mid) {
            high = mid - 1;
        }
        else
            low = mid + 1;
    }

});