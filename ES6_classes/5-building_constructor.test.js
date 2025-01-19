class ResidentialBuilding extends Building {
    constructor(sqft, units) {
        super(sqft); // Call the parent constructor
        this.units = units;
    }

    evacuationWarningMessage() {
        return `Evacuate all ${this.units} units!`;
    }
}
