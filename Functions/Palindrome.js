const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function palindrome(num) {
    const reverseNum = parseFloat(num.toString().split('').reverse().join(''));
    console.log(reverseNum);
    if (num == reverseNum)
        return true;
    else
        return false;
}

readLine.question("Enter number", (num) => {
    if (palindrome(Number(num)))
        console.log("Palindrome");
    else
        console.log("Not Palindrome");
    readLine.close();
});