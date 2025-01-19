// building.js (or whatever the file is named)
class Building {
    constructor(sqft) {
        if (this.constructor === Building) {
            throw new Error("Class extending Building must override evacuationWarningMessage");
        }
        this.sqft = sqft;
    }

    evacuationWarningMessage() {
        throw new Error("Class extending Building must override evacuationWarningMessage");
    }
}

export default Building; // Ensure you are using default export