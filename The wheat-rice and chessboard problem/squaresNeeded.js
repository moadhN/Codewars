function squaresNeeded(grains, square = 0) {
    if (grains / 2 <= 0) {
        return square == 0 ? 0 : Math.ceil(square)
    }
    return squaresNeeded(parseInt(grains / 2), square + 1)
}

console.log(squaresNeeded(0));
console.log(squaresNeeded(1));
console.log(squaresNeeded(2));
console.log(squaresNeeded(3));
console.log(squaresNeeded(4));