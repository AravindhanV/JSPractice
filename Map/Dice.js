let dieRolls = {};

while (true) {
  let roll = Math.floor(Math.random() * 6) + 1;
  dieRolls[roll] = 1 + (dieRolls[roll] ? dieRolls[roll] : 0);
}
