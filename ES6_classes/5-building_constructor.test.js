import Building from './building'; // Correct path to the Building class

describe('Building Class', () => {
    test("Building is implemented correctly", () => {
        // Create a subclass that implements the required method
        class TestBuilding extends Building {
            evacuationWarningMessage() {
                return "This is a test building evacuation warning.";
            }
        }

        const building = new TestBuilding(200); // Now this should work
        expect(building.sqft).toBe(200);
    });
});