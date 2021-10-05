const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question('Enter Month: ', m => {
    month = m;
    readLine.question('Enter Date: ', d => {
        date = d;
        if (month > 2 && month < 7) {
            console.log(true);
        } else {
            console.log(false);
        }
        readLine.close();
    });
});