let myNumbers = [1, 2, 3, 4, 5];
let [a, , , , b] = myNumbers

console.log(a * e); // 5


/* ------------------------------------------------------------------------------------------------------- */

let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

let [a, b, c, [d, e, [f, g]]] = mySkills

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

/* ------------------------------------------------------------------------------------------------------- */

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

let [, a] = arr3
let [b] = arr2
let [c] = arr1

console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed


/* ------------------------------------------------------------------------------------------------------- */

const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
};

let { age: a, working: w, country: c, hobbies: [h1, , h3] } = member


console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);

console.log(`I Live in ${c}`);

console.log(`My Hobbies: ${h1} And ${h3}`);


/* ------------------------------------------------------------------------------------------------------- */


