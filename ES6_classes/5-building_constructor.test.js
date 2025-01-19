import Building from './building'; // Correct path to the Building class

describe('Building Class', () => {
    test("Building is implemented correctly", () => {
        const building = new Building(200); // This should work if the import is correct
        expect(building.sqft).toBe(200);
    });
});