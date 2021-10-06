let dieRolls = {};
let roll = -1;
while (true) {
  roll = Math.floor(Math.random() * 6) + 1;
  dieRolls[roll] = 1 + (dieRolls[roll] ? dieRolls[roll] : 0);
  if (dieRolls[roll] == 10) {
    break;
  }
}
