class Dinglemouse {

    constructor(firstName, lastName) {
        console.log(firstName)
        console.log(lastName)
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName() {

        if (this.lastName && this.firstName) return `${this.firstName} ${this.lastName}`;
        if (this.firstName && !this.lastName) return this.firstName;
        if (!this.firstName && this.lastName) return this.lastName;
        return ''
    }

}