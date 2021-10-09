
function fatFingers(str) {
    if (str == null) return null;
    if (str == 'undefined') return null;
    if (str == '') return null;
    let shiftPress;

    str[0] === str[0].toUpperCase() ? shiftPress = true : shiftPress = false

    const strArray = str.replace(/([a-z](?=[A-Z])|[A-Z](?=[a-z]))/g, '$1+')

    let result = '';

    for (let i of strArray) {
        const currentString = i;

        if (i === "+") {
            shiftPress = !shiftPress
        }

        for (let j of currentString) {
            const currentLetter = j;

            if (j === "a" || j === "A") {
                shiftPress = !shiftPress
            }
            if (shiftPress) {

                j = j.toUpperCase()
                result += j
            } else if (!shiftPress) {
                j = j.toLowerCase()
                result += j
            }
            result = result.replace(/a|\+/ig, '');

        }
    }
    return result

}

