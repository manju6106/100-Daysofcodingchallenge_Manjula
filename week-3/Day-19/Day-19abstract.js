function Car(model) {
    this.model = model;
  
    let engineStatus = 'off'; // Private attribute
  
    function startEngine() { // Private method
      engineStatus = 'on';
      console.log('Engine started');
    }
  
    this.drive = function() { // Public method
      startEngine();
      console.log(`${this.model} is driving.`);
    };
  }
  
  let myCar = new Car('ModelX');
  myCar.drive();
  