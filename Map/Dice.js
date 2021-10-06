let dieRolls = {};
let roll = -1;
while (true) {
  roll = Math.floor(Math.random() * 6) + 1;
  dieRolls[roll] = 1 + (dieRolls[roll] ? dieRolls[roll] : 0);
  if (dieRolls[roll] == 10) {
    break;
  }
}

let rollFrequency = Object.values(dieRolls);
let minRoll =
  rollFrequency.indexOf(
    rollFrequency.reduce((a, b) => {
      return Math.min(a, b);
    })
  ) + 1;

let maxRoll =
  rollFrequency.indexOf(
    rollFrequency.reduce((a, b) => {
      return Math.max(a, b);
    })
  ) + 1;

console.log(minRoll + " rolled the least times");
console.log(maxRoll + " rolled the most times");
