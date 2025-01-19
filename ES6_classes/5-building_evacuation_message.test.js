import Building from './building'; // Correct path to the Building class

describe('Building Class', () => {
    test("Building forces override", () => {
        class TestBuilding extends Building {}
        expect(() => {
            new TestBuilding(200); // This should throw an error
        }).toThrowError("Class extending Building must override evacuationWarningMessage");
    });
});