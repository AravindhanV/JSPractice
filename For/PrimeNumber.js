var readline = require('readline');
var rl = readline.createInterface(
    process.stdin, process.stdout);
var flag = 0;
rl.question('Enter number ', (num1) => {
    rl.question('Enter number ', (num2) => {
        for (let i = num1; i <= num2; i++) {
            for (let j = 2; j < i / 2; j++) {
                if (i % j == 0) {
                    console.log("Not Prime")
                    flag = 1;
                    break;
                }

            }
            if (flag == 0)
                console.log("Prime");
        }

        rl.close();
    });

});