let startingMoney = 100;

while (startingMoney <= 200 && startingMoney >= 0) {
    let bet = Math.random();
    if (bet < 0.5)
        startingMoney--;
    else
        startingMoney++;
}
if (startingMoney == 0)
    console.log("Gambler lost");
else
    console.log("Gambler won");