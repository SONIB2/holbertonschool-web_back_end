// building.js
class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error("Class extending Building must override evacuationWarningMessage");
    }
    this.sqft = sqft;
  }

  evacuationWarningMessage() {
    throw new Error("evacuationWarningMessage must be implemented");
  }
}

export default Building; // Ensure this line is present
