function startingMark(bodyHeight) {
    if ((1.52 - bodyHeight).toFixed(2) % .3 === 0) return 1.18 * ((bodyHeight - 1.52).toFixed(2) / 0.3) + 9.45
    if ((1.83 - bodyHeight).toFixed(2) % .3 === 0) return 1.18 * ((bodyHeight - 1.83).toFixed(2) / 0.3) + 10.67
}