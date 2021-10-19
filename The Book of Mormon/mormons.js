function Mormons(startingNumber, reach, target, count = 0) {
    return startingNumber >= target ? count : Mormons(startingNumber + (startingNumber * reach), reach, target, count = count + 1)
}