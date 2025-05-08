// index.js - Anon Functions and Callbacks
// Author: Ren Buendia
// Date: May 8th, 2025

// Variables
var numArray = [1, 2, 3, 4, 5];

console.log("My array:  ", numArray);

// Functions

// Double the array
function doubleNumArray(index) {
    var result = 2 * numArray[index];
    return result;
}

console.log("Take the first index, which is :", numArray[0], " and double its value: ", doubleNumArray(0));

// Quadruple the array

var quadrupledArray = numArray.map(function(value) {
    return 4 * value;
});

console.log("Quadrupled Array Results: ", quadrupledArray);

// Square root of each value in the array
var squareRootArray = numArray.map(function(value) {
    return Math.sqrt(value);
});

console.log("Square Root Array Results: ", squareRootArray);