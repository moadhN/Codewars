class Person {
    constructor(name) {
        this.name = name;
        this.greet = function (yourName) {
            return `Hello ${yourName}, my name is ${this.name}`
        }
    }
}
