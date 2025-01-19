// 5-building.js
class Building {
    constructor(sqft) {
        this._sqft = sqft; // Store sqft in a private attribute

        // Check if the instance is of Building and throw an error
        if (new.target === Building) {
            throw new Error("Cannot instantiate abstract class Building directly");
        }
    }

    get sqft() {
        return this._sqft; // Getter for sqft
    }

    evacuationWarningMessage() {
        throw new Error('Class extending Building must override evacuationWarningMessage');
    }
}

export default Building; // Ensure this line is present
