function NamedOne(first, last) {
    // -- SHOULD be changed --
    this.firstName = first;
    this.lastName = last;
    this.fullName = firstName + ' ' + lastName;
}

const namedOne = new NamedOne("Naomi", "Wang")

console.log(namedOne.firstName) // -> "Naomi"
console.log(namedOne.lastName) // -> "Wang"
console.log(namedOne.fullName) // -> "Naomi Wang"

namedOne.firstName = "John"
console.log(namedOne.firstName) // -> "John"
namedOne.lastName = "Doe"
console.log(namedOne.lastName) // -> "Doe"


console.log(namedOne.fullName) // -> "Naomi Wang" 
//-- Oh no ! we want fullName == "John Doe" now !