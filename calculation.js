//This calculation.js lists basic mathematical functions.
// The functions are exported. They are imported in main.js.

// Showing 2 ways to export functions

// This export method has the export as a separate statement;
function add(x, y) {
	return x + y;
}
export add;

function subtract(x,y) {
	return x - y;
}
export subtract;

//This way uses export function(){};
export function multiply(x,y) {
	return x * y;
};

export function divide(x,y) {
	return x / y;
};

// Extra credit
function square(x) {
	return x * x;
};
 
function generateRandom() {
    return Math.random();
}

function cube(x) {
    return x * x * x;
}
// Multiple exports in one statement
export { square, generateRandom, cube };