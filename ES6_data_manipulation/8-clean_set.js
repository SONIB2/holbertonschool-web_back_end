export default function cleanSet(set, startString) {
  // If the startString is empty, return all items from the set
  if (startString === '') {
      return [...set].join('-');
  }
  
  // Create an array of strings that start with 'startString'
  const result = [];
  
  // Loop through each element in the set
  for (let item of set) {
      // Check if item is a string and starts with startString
      if (typeof item === 'string' && item.startsWith(startString)) {
          // Append the part after the startString to the result array
          result.push(item.slice(startString.length));
      }
  }
  
  // Join the array into a string separated by '-'
  return result.join('-');
}
