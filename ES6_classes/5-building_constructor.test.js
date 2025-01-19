import Building from './5-building.js'; // Ensure this path is correct

describe('Building Class', () => {
    test("Building is implemented correctly", () => {
        const building = new Building(200); // This should work if the import is correct
        expect(building.sqft).toBe(200);
    });
});
