function whoseMove(lastPlayer, win) {
    if (lastPlayer === "white") {
        if (win) return "white"
        else return "black"
    }
    if (lastPlayer === "black") {
        if (win) return "black"
        else return "white"
    }
}

/* ------------------------------------------------------------------- */


function whoseMove(lastPlayer, win) {
    return win ? lastPlayer : lastPlayer == "white" ? "black" : "white"
}

console.log(whoseMove("black", false)) //white
console.log(whoseMove("white", true))//white
console.log(whoseMove("white", false))//black