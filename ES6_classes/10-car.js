const carSymbol = Symbol('Car');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this[carSymbol] = true;  // Optional symbol property for uniqueness
  }

  // Method to clone the car object
  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }

  // Optionally, a method to display the object as a string
  toString() {
    return `${this._brand} ${this._motor} ${this._color}`;
  }
}

export default Car;
