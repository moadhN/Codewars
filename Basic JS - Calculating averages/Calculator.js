const Calculator = {
    average: function (...int) {
        const intArray = [...int]
        const l = intArray.length;
        return (intArray.reduce((a, b) => a + b, 0) / l) || 0
    }
};