String.prototype.toJadenCase = function () {
    let lettre = '',
        capitalise,
        jadenCase = '';
    for (let i = 0; i < this.length; i++) {
        lettre = this[i];
        if (lettre == ' ') {
            capitalise = true;
            jadenCase += ' '
        } else {
            if (capitalise) {
                jadenCase += lettre.toUpperCase();
                capitalise = false;

            } else if (i == 0) {
                jadenCase += lettre.toUpperCase();
            } else {
                jadenCase += lettre.toLowerCase();
            }
        }
    }
    return jadenCase
};