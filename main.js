import { add, subtract, multiply, divide, square } from 'calculation';
import { generateRandom, cube } from 'calculation';

console.log( "Addition: 2 + 3 = " + add(2,3) );
document.getElementById("output").innerHTML = "Addition: 2 + 3 = " + add(2,3);

console.log(subtract(9,5)); // 4
console.log(multiply(7,6)); // 42
console.log(divide(144,12)); // 12
console.log(square(3)); // 9
console.log(generateRandom()); //logs a random number between 0 and 1
console.log(cube(3)); // 27