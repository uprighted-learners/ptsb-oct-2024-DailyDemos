// Abstraction == "Simplification"
// Hiding away complexity

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Area method hides complexity
  area() {
    return this.height * this.width;
  }
}
const shape = new Rectangle(10, 8);
console.log(`The shape's area is: ${shape.area()}`);