
if(true){
    let a = 10
    const b = 20
    var c = 30

}

// console.log(a)
// console.log(b)
// console.log(c)

// what is closure
// asnwer: a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time

// what is hoisting
// answer: hoisting is concept in which u cannot access a variable until u not declared it a value.

// what is this keyword
// answer: this keyword is used to create a current context. mean ek scope ke andar chizo ko access karne ke liye hum this ka use karte ha. 
// we can't use this inside a functions


// arrow function : inside a arrow we cannot use a this keyword
const fun = () => {
   let userName = "Mayank"
   console.log(this);
}

// fun()

// implicit return of arrow function

const addTwoNum = (num1,num2) => (num1+num2)

console.log(addTwoNum(3,4))