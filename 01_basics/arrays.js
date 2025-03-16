// array always create a shallow copy

let a = [1,2,3,4,5,6]
let hero = ["ironman", "captainAmerica"]

// Arrays method 
// a.push(7)
// console.log(a)

// a.pop()
// console.log(a)

// a.unshift(9) // add in front of array left to right
// console.log(a)

// a.shift() // right to left shift
// console.log(a)


// console.log(a.includes(5))
// console.log(a.indexOf(4))

// const c = a.join()
// console.log(typeof c)
// console.log(c)

// slice or splice

let myArr = [0,1,2,3,4,5,6]

//  slice only get the element fromm given range
console.log(myArr.slice(1,4))
console.log(myArr)

// splice break the array into two portion 
console.log(myArr.splice(0,4))
console.log(myArr)