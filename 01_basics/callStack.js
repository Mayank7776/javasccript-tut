// Javascript Execution Context, javascript script is single threaded language
// 1. global Execution context.
// 2. function Execution Context.
// 3. Eval Execution Context.

//  Execution-phases
// 1. global Execution context created and hold in this keyword.

// 2. Memory creation phase.
    // val1 = undefined
    // val2 = undefined
    // add = definition
    // result1 = undefined
    // result2 = undefined

// 3. Execution phase.
// val1 = 5
// val2 = 10
//  whenever a function is executed a new environment will be created and new execution thread which is inside a sandbox
// when the total is found it will go to the global execution and 'after completing a execution the whole sandbox is deleted 


// example using code
let val1 = 5
let val2 = 10

function add(i, j){
    let total = i + j
    return total
}

let result1 = add(val1,val2)
let result2 = add(10,5)

// callStacl = A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.