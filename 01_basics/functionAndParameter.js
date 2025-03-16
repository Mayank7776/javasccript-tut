//  IIFE function (Immediately invoked function expression)
//  global scope ke pollution se problem hoti kayi bar to usko hatane ke liye we use iife.
// (function(){})();   // syntax , note semi colon is needed. 

(function(){
    console.log("Db Connected")
})();

((name)=> {
 console.log(`${name}`)
})("Mayank");