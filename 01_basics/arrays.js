// array always create a shallow copy

let a = [1,2,3,4,5,6]

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
// console.log(myArr.slice(1,4))
// console.log(myArr)

// splice break the array into two portion 
// console.log(myArr.splice(0,4))
// console.log(myArr)


let hero = ["ironman", "captainAmerica", "thor"]
let dc = ["superman", "flash"]

// what push do push add another array as a element inside the hero array
// hero.push(dc)
// console.log(hero)

// concat add the element of dc array and hero array in new array
// let newArr = hero.concat(dc)
// console.log(newArr)

// by using spread operator which is used to make all element individual in array
const allHero = [...hero, ...dc];
console.log(allHero)

// flat used to spread all array
const anotherArr = [1,2,3,[4,5,6],8,[1,2,3,4,[4,3]]]
const arr = anotherArr.flat(Infinity)
console.log(arr)

// another way of creating a array
console.log(Array.from('Mayank'))
console.log(Array.of(a, myArr))