// 5-main.js
import Building from './5-building.js';

const b = new Building(100); // This will throw an error as Building is abstract
console.log(b);

class TestBuilding extends Building {}

try {
    new TestBuilding(200); // This will throw an error due to missing evacuationWarningMessage
} catch (err) {
    console.log(err); // Output: Error: Class extending Building must override evacuationWarningMessage
}
