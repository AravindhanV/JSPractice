let numbers = new Array(-1, 1, 0);

let sum = numbers.reduce((a, b) => {
  return a + b;
});

if (sum == 0) {
  console.log("Sum is zero");
} else {
  console.log("Sum is not zero");
}
