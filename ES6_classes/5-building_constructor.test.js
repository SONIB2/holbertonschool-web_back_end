import Building from './building'; // Adjust path if necessary

// Create a subclass of Building for testing
class TestBuilding extends Building {
  evacuationWarningMessage() {
    return "This is a test building evacuation warning.";
  }
}

describe('Building Class', () => {
  test("Building is implemented correctly", () => {
    const building = new TestBuilding(200); // Use TestBuilding instead of Building
    expect(building.sqft).toBe(200);
  });
});
