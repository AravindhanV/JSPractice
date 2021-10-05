function FToC(t) {
    return (t - 32) * 5 / 9;
}

function CToF(t) {
    return (t * 9 / 5) + 32;
}

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let temperature = 40;

readLine.question('Enter 1 for f to c and 2 for c to f: ', m => {
    switch (Number(m)) {
        case 1: if (temperature >= 32 && temperature <= 212) {
            console.log(FToC(temperature));
        }
            break;
        case 2: if (temperature >= 0 && temperature <= 100) {
            console.log(CToF(temperature));
        }
            break;
        default: console.log("Invalid input");
    }
    readLine.close();
});