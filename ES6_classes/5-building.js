// 5-building.js (Abstract Building class)
class Building {
  constructor(sqft) {
      if (this.constructor === Building) {
          throw new Error("Class extending Building must override evacuationWarningMessage");
      }
      this._sqft = sqft;  // Store sqft in a private attribute
  }

  // Abstract method that must be implemented by subclasses
  evacuationWarningMessage() {
      throw new Error("Subclass must implement this method");
  }
}

export default Building;
