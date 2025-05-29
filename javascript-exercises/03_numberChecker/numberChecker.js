"use strict";

// Modify the code so it returns true when the 
// number is greater than or equal to 10, 
// and false if it is less than 10.

// *** ORIGINAL ***

// function numberChecker(number){
//     if (number === 6){
//         return true;
//     } else {
//         return false;
//     }
// }

// *** SOLUTION ***


function numberChecker(number){
    if (number >= 10){
        return true;
    } else {
        return false;
    }
}

let nine = numberChecker(9);
let ten = numberChecker(10);
let eleven = numberChecker(11);

console.log(nine);
console.log(ten);
console.log(eleven);