"use strict";

// console.log("test");

// Troubleshoot and modify the existing function so that it returns the digit 2. Avoid "hard coding" the result and try to use variables a and b to get the correct output.

// Currently, it is not returning the correct value.

// *** ORIGINAL ***

// function addNumbers() {
//     const a = 1;
//     const b = 1; 

//     let result;

//     result = "a" + "b";

//     return result;
// }

// const result = addNumbers();

// console.log(result);

// *** SOLUTION ***

function addNumbers(){
    const a = 1; 
    const b = 1;

    let result;

    result = a + b;

    return result;
}

const result = addNumbers();

console.log(result);
