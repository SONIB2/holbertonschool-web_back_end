export default function cleanSet(set, startString) {
    const arr = [];
  
    // Check if startString is valid
    if (typeof startString === 'undefined' || startString === '' || typeof startString !== 'string') {
      return '';
    }
  
    set.forEach((element) => {
      // If element starts with startString, remove startString and push the rest
      if (element.startsWith(startString)) {
        arr.push(element.slice(startString.length));
      }
    });
  
    // If arr is empty, return an empty string, else join the array with hyphen
    return arr.length > 0 ? arr.join('-') + '-' : '';
  }
  