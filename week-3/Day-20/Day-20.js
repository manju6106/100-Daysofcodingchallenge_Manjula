// Original Prototype Pattern
function Ca(make, model) {
    this.make = make;
    this.model = model;
}

Ca.prototype.displayInfo = function() {
    console.log(`This car is a ${this.make} ${this.model}.`);
};

const myCar1 = new Ca('Toyota', 'Corolla');
myCar1.displayInfo();

// ES6 Class Syntax
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    displayInfo() {
        console.log(`This car is a ${this.make} ${this.model}.`);
    }
}

const myCar2 = new Car('Toyota', 'Corolla');
myCar2.displayInfo();

// Class with Static Method
class CarType {
    static identify() {
        console.log('I am a Car class.');
    }
}

CarType.identify();

// Inheritance with Classes
class Vehicle {
    constructor(wheels) {
        this.wheels = wheels;
    }

    displayWheels() {
        console.log(`This vehicle has ${this.wheels} wheels.`);
    }
}

class CarWithWheels extends Vehicle {
    constructor(make, model) {
        super(4); 
        this.make = make;
        this.model = model;
    }
}

const myCar3 = new CarWithWheels('Honda', 'Civic');
myCar3.displayWheels();

// Using Getters and Setters
class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

let person = new Person('Alice');
console.log(person.name);
person.name = 'Bob';
console.log(person.name);
