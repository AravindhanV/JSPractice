let a = 5;
let b = 3;
let c = 7;

let min = Math.min(a + b * c, a % b + c, c + a / b, a * b + c);
let max = Math.max(a + b * c, a % b + c, c + a / b, a * b + c);

console.log("Min: " + min);
console.log("Max: " + max);