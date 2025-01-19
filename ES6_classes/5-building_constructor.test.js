import Building from './5-building.js'; // Ensure this path is correct

describe('Building Class', () => {
    // Test to ensure that Building cannot be instantiated directly
    test("Building forces override", () => {
        expect(() => {
            new Building(200); // This should throw an error
        }).toThrowError("Class extending Building must override evacuationWarningMessage");
    });

    // Test for a subclass implementation
    test("TestBuilding is implemented correctly", () => {
        class TestBuilding extends Building {
            evacuationWarningMessage() {
                return "This is a test building evacuation warning.";
            }
        }

        const testBuilding = new TestBuilding(100); // Create an instance of the subclass
        expect(testBuilding).toBeInstanceOf(TestBuilding);
        expect(testBuilding.sqft).toBe(100);
    });
});
