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

export default Building; // Ensure this is exported correctly