function filter_list(l) {
    // Return a new array with the strings filtered out
    myArray = [];
    l.map(check => {

        typeof (check) == 'number' ? myArray.push(check) : undefined;

    })
    return myArray
}

/* -------------------------------------------------------------------------------------------------------- */

function filter_list(l) {
    // Return a new array with the strings filtered out
    myArray = [];
    l.map(check => {

        typeof (check) == 'number' ? myArray.push(check) : undefined;

    })
    return myArray
}

/* -------------------------------------------------------------------------------------------------------- */

function filter_list(l) {

    return l.filter(item => typeof item === 'number')

}
