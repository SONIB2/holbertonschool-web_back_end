// 5-building_evacuation_message.test.js
import Building from './5-building.js';

describe('Building Class', () => {
    test("Building forces override", () => {
        class TestBuilding extends Building {}

        expect(() => {
            new TestBuilding(200); // This should throw an error
        }).toThrowError("Class extending Building must override evacuationWarningMessage");
    });
});
