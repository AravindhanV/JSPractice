let flip = Math.floor(Math.random() * 2);
let headWin = 0;
let tailWin = 0;
const HEADS = 0;

while (headWin <= 11 && tailWin <= 11) {
    if (flip == HEADS)
        headWin++;
    else
        tailWin++;
}
if (tailWin == 11)
    console.log("Tails won");
else
    console.log("Heads won");