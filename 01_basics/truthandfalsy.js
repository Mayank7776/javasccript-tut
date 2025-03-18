// const Email = "email.com"

// if condition will be executed if string is not empty if string is empty then else block will be run
// if(Email){
//     console.log("user logged in")
// }
// else{
//     console.log("user not log in")
// }

// falsy value

// 1. false
// 2. 0 or -0
// 3. big int 
// 4. ""
// 5. null
// 6. undefined
// 7. NaN

// Truthy value

// 1. "0"
// 2. "false"
// 3. " "
// 4. [], {}
// 5. function(){}

// how to check a array 
let Arr = []

if(Arr.length == 0 ){
    console.log("array is empty")
}

let obj = {}

if (Object.keys(obj).length == 0){
    console.log("object is empty")
}

//  Nullish coalescing Operator (??):null undefined

let val1;
val1 = 5 ?? 20

// ternary operator : condition ? true : false;

let val = 2

val == 2 ? console.log("value true") : console.log("value false") 