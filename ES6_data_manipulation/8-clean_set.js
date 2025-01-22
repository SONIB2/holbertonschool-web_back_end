export default function cleanSet(set, startString) {
  // If startString is not a string or is empty, return an empty string
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }
  // Create an array of strings that start with 'startString'
  const result = [];
  // Loop through each element in the set
  for (const item of set) {
    // Check if item is a string and starts with startString
    if (typeof item === 'string' && item.startsWith(startString)) {
      // Append the part after the startString to the result array
      result.push(item.slice(startString.length));
    }
  }
  // Join the array into a string separated by '-'
  return result.join('-');
}
