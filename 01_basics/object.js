//  whenever we create a obj from constructor it is called singleton obj
const tinderuser = {
    name: "mayank",
    id: "12sada",
}

console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))

console.log(tinderuser.hasOwnProperty("name"))

// destructuring 

const course = {
    courseName: "javascript",
    price : "999",
    courseInstructor: "vivek"
}

const {courseInstructor: instructor} = course
console.log(instructor)

// obj literals
const mySym = Symbol("key1")

let obj = {
 name: "mayank",
 [mySym] : "key2",
 age: 21,
 bdayMonth : "june",
 lastlogedInDa: ["Mon", "Wed"],
}

// console.log(obj['name'])
// console.log(obj[mySym])

// adding function to the object

obj.greeting = function(){
    console.log(`hello world, ${this.name}`)
}

// console.log(obj.greeting())
// obj.greeting()

// Json
// {
//     "name":"mayank",
//     "age": 21,
// }