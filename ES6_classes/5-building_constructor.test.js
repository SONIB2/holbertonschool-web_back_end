// 5-building_constructor.test.js
import Building from './5-building.js';

// Define a subclass that implements the evacuationWarningMessage method
class TestBuilding extends Building {
  evacuationWarningMessage() {
    return "Evacuation warning!";
  }
}

describe("Building class", () => {
  // Test to ensure that we cannot instantiate the abstract class directly
  it("throws error when trying to instantiate Building directly", () => {
    expect(() => new Building(100)).toThrow("Cannot instantiate an abstract class");
  });

  // Test that subclass can be instantiated
  it("can be instantiated via subclass", () => {
    const b = new TestBuilding(100);
    expect(b.sqft).toBe(100);  // Ensure sqft is set correctly
  });

  // Test to ensure that error is thrown if subclass doesn't implement evacuationWarningMessage
  it("throws error if subclass does not implement evacuationWarningMessage", () => {
    class InvalidBuilding extends Building {}

    expect(() => new InvalidBuilding(100)).toThrow(
      "Class extending Building must override evacuationWarningMessage"
    );
  });
});
