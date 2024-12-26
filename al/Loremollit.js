function hasLongName(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
      return true;
    }
  }
  return false;
}

// Example usage:
const names = ['John', 'Sarah', 'Michael', 'Emma'];
console.log(hasLongName(names)); // Output: true

const otherNames = ['Tom', 'Kate', 'Alex'];
console.log(hasLongName(otherNames)); // Output: false
