// 5-building_constructor.test.js (Test)
import Building from './5-building.js';

describe('Building Class', () => {
    // Test to ensure that Building cannot be instantiated directly
    test("Building forces override", () => {
        expect(() => {
            new Building(200); // This should throw an error because Building is abstract
        }).toThrowError("Class extending Building must override evacuationWarningMessage");
    });

    // Test for a subclass implementation
    test("TestBuilding is implemented correctly", () => {
        class TestBuilding extends Building {
            evacuationWarningMessage() {
                return "This is a test building evacuation warning.";
            }
        }

        const testBuilding = new TestBuilding(100); // This should work because TestBuilding implements evacuationWarningMessage
        expect(testBuilding).toBeInstanceOf(TestBuilding);
        expect(testBuilding.sqft).toBe(100);
        expect(testBuilding.evacuationWarningMessage()).toBe("This is a test building evacuation warning.");
    });
});
