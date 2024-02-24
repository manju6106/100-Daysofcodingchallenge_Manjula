function Shape() {}
Shape.prototype.draw = function() {
  return "I am just a generic shape";
};

function Circle() {}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.draw = function() {
  return "I am a circle";
};

const shapes = [new Shape(), new Circle()];
shapes.forEach(shape => {
  console.log(shape.draw());
});
