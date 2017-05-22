//Acadgild Angular Assignment 2.2, second part

/** "Create a class ‘Vehicle’ as base class where define vehicle name and type
using properties and define methods to getName and getType of vehicle.
Now create 3 more class, will extend Vehicle class and uses its properties.
Create instance of these classes and display output using console."
*/

//Create class "Vehicle" with name and type properties, and getName and getType methods
"use strict";
class Vehicle {
    constructor(name, type, baseCost) {
        this.name = name;
        this.type = type;
        this.baseCost = baseCost;
    }
    
    getName() {
        return this.name;
    }

    getType() {
        return this.type;
    }

    getBaseCost() {
        return this.baseCost;
    }
    displayOutput() {
        console.log("Name: " + this.name + "Type: " + this.type + "Base Cost: " + this.baseCost);
    }
} // end class Vehicle

// Now create 3 more classes which extend Vehicle class and uses its properties.
// 1st additional class creation extending Vehicle class
//   Note: If there is a constructor present in sub-class, 
//         it needs to first call super() before using "this".
class SportsCoupe extends Vehicle {
    constructor(name, type, baseCost){
        super(name, type, baseCost);
        this.doors = 2;
    } // end constructor()
}   // end CostCategory

// Create instances of these classes and display output using console.
// 1st additional class instance creation and output
var sportsCoupe1 = new SportsCoupe("Sporty", "coupe", 9000);
console.log(sportsCoupe1.name + " has " + sportsCoupe1.doors);
sportsCoupe1.displayOutput();

// 2nd additional class creation extending Vehicle class  
class Boat extends Vehicle() {
    constructor(name, type, baseCost){
        super(name, type, baseCost);
        this._length = 30; //default
    }
}
// 2nd additional class instance creation and output
var boat1 = new Boat("Slough Bayou", "houseboat", 35000);
boat1._length = 37;
boat1.displayOutput();
console.log("The lenght is " + boat1._length + " feet.")

// 3rd additional class creation extending Vehicle class
class Motorcycle extends Vehicle(){
    constructor(name, type, baseCost){
        super(name, type, baseCost);
        this.wheels = 2;
    }
}
// 3nd additional class instance creation and output
var motorcycle1 = new Motorcycle("Speedster", "Motorcycle", 9000);
console.log(motorcycle1.name + " has " + motorcycle1.wheels);
motorcycle1.displayOutput();
