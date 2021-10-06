var readline = require('readline'); 
var rl = readline.createInterface(
     process.stdin, process.stdout);
var harmonic=0;
rl.question('Enter number ', (num) => {
    for(let n=1; n<=Number(num); n++){
        harmonic= harmonic+ Number(1/n);    
    }
    console.log(harmonic);
    rl.close();
});