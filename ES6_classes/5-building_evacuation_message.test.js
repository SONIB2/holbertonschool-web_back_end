import Building from './building'; // Correct path to the Building class

describe('Building Class', () => {
    test("Building forces override", () => {
        class TestBuilding extends Building {
            evacuationWarningMessage() {
                return "This is a test building evacuation warning.";
            }
        }

        expect(() => {
            new TestBuilding(200); // This should throw an error
        }).toThrowError("Class extending Building must override evacuationWarningMessage");
    });
});