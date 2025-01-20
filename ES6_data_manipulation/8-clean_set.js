function cleanSet(set, startString = '') {
    return [...set]
      .filter(item => item.startsWith(startString))  // Filter values that start with startString
      .map(item => item.slice(startString.length))   // Remove startString from each element
      .join('-');                                   // Join the values with '-'
}
export default cleanSet;
