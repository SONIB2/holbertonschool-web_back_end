// 5-building.js
class Building {
  constructor(sqft) {
      if (this.constructor === Building) {
          throw new Error("Class extending Building must override evacuationWarningMessage");
      }
      this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
      return this._sqft;
  }

  // Abstract method to be implemented by subclasses
  evacuationWarningMessage() {
      throw new Error("evacuationWarningMessage must be implemented");
  }
}

export default Building;
