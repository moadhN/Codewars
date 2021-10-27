function likes(names) {
    console.log(names)
    if (names == null) return 'no one likes this'
    else if (names.length == 1) { return (names.join('') + ' likes this') }
    else if (names.length > 3) {
        names.splice(1, 0, ", ");
        names.splice(3, 0, ' and ');
        let count = names.length - 4;
        names.splice(4, names.length, `${count} others like this`)
        names = names.join('');
        return names

    }
    else if (names.length > 1 && names.length <= 3) {
        names.splice(names.length - 1, 0, "and");
        names = names.join(', ')
        let pos = names.lastIndexOf(',')
        names = names.slice(0, pos) + names.slice(pos + 1)
        pos = names.lastIndexOf(',')
        names = names.slice(0, pos) + names.slice(pos + 1) + ' like this'
        return names
    } else {
        return 'no one likes this'
    }
}