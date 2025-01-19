import Building from './building'; // Ensure this path is correct

// Create a subclass of Building for testing
class TestBuilding extends Building {
  evacuationWarningMessage() {
    return "This is a test evacuation warning message.";
  }
}

describe('Building Class', () => {
  test("Building is implemented correctly", () => {
    const testBuilding = new TestBuilding(100); // Create an instance of the subclass
    expect(testBuilding).toBeInstanceOf(TestBuilding);
    expect(testBuilding.sqft).toBe(100);
  });
});
