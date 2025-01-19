class Building {
    constructor(sqft) {
        if (new.target === Building) {
            throw new Error("Cannot instantiate abstract class Building directly");
        }
        this._sqft = sqft; // Store sqft in a private attribute
    }

    get sqft() {
        return this._sqft; // Getter for sqft
    }

    evacuationWarningMessage() {
        throw new Error('Class extending Building must override evacuationWarningMessage');
    }
}
