import updateUniqueItems from "./10-update_uniq_items.js";
import groceriesList from "./9-groceries_list.js";

// Initialize the groceries map
const map = groceriesList();
console.log("Before update:");
console.log(map);

// Update the map with unique items having quantity 1 set to 100
updateUniqueItems(map);

console.log("After update:");
console.log(map);
