function Vehicle(speed) {
  this.speed = speed;

  this.move = function() {
    console.log(`Moving at ${this.speed} km/h.`);
  };
}

function Car(speed, fuelType) {
  Vehicle.call(this, speed); // Inheritance
  this.fuelType = fuelType;
}

let myCar = new Car(120, 'Diesel');
myCar.move(); // Output: Moving at 120 km/h.