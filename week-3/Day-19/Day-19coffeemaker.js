function CoffeeMaker(brand) {
    let temperature = 90; // Encapsulated property
  
    this.brand = brand; // Public property
  
    this.brew = function() { // Public method
      console.log(`Brewing coffee at ${temperature} degrees.`);
    };
  }
  
  let myCoffeeMaker = new CoffeeMaker('BrandX');
  myCoffeeMaker.brew(); // Output: Brewing coffee at 90 degrees.