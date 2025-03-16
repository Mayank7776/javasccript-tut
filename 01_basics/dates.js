let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

const customDate = new Date(2004, 5, 22);

console.log(customDate.toDateString());

let datern = Date.now();

console.log(datern)

// date method

const MethodDate = new Date()

console.log(MethodDate.getMonth() + 1)
console.log(MethodDate.getDay() + 1)
console.log(MethodDate.getTime())

