function jumpingNumber(n) {
    if (Math.floor(n % 10) === 0) return "Jumping!!";
    strNumber = n.toString()
    for (let i = 0; i < strNumber.length; i++) {
        const j = i + 1;
        const prevNumber = strNumber[i];
        const currentNumber = strNumber[j];
        if (currentNumber == undefined) return "Jumping!!"
        if (Math.abs(currentNumber - prevNumber) != 1) return "Not!!"
    }
}