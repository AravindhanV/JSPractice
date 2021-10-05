let min = Number.MAX_VALUE;
let max = Number.MIN_VALUE;
const NO_OF_INPUTS = 5;

for (let input = 0; input < NO_OF_INPUTS; input++) {
    let number = Math.floor(Math.random() * 900) + 100;
    min = Math.min(min, number);
    max = Math.max(max, number);
    console.log(number);
}

console.log("MIN: " + min + ", MAX: " + max);