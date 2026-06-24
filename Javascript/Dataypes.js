let a = 10;

console.log(typeof a);
console.log(typeof "java");
let b = null;
console.log(typeof b);
let c = false;
console.log(typeof c);

let d = 2545473453n;
console.log(typeof d);

let s = Symbol("hello")

console.log(typeof s);
console.log(typeof x);

let arr = ["html", "css"];
let arr1 = [10, true, null, "java"]
//Array Destructuring 
let [n, m] = arr;
console.log(n);
console.log(m);
// spread Operators -> ES6 

let arr2 = [...arr, ...arr1, "Javascript", true]

console.log(arr);
console.log(arr1);
console.log(arr2);


let personDetails = {
    name: "Teja",
    email: "teja@gamil.com",
    age: 30,
    skills: ["React js", "Node js"]
}
console.log(personDetails.skills[1]);

//object Destructuring
let { name, email, age, skills } = personDetails

console.log(name);
console.log(email);
console.log(age);
console.log(skills);

let person2 = {
    name2: "Vivek",
    age2: 25,
    email2: "vivek@gmail.com"
}

let allPersons = { ...personDetails, ...person2 }

console.log(allPersons);
