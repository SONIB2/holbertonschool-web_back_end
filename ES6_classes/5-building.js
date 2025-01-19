// 5-building.js
class Building {
    constructor(sqft) {
        this._sqft = sqft; // Store sqft in a private attribute
    }
    get sqft() {
        return this._sqft; // Getter for sqft
    }
    evacuationWarningMessage() {
        throw new Error('Class extending Building must override evacuationWarningMessage');
    }
}
