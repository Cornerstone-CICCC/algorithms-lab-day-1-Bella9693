// Exercise 4: Write a function named 'countOccurrences' that takes an array of strings and returns an object with the count of each string in the array.

function countOccurrences(arr) {
  let counts = {};

  for (let i = 0; i < arr.length; i++) {
    let fruit = arr[i];
    if (counts[fruit]) {
      counts[fruit] += 1;
    } else {
      counts[fruit] = 1;
    }
  }
  return counts;
}

console.log(countOccurrences(["apple", "banana", "apple"])); // { apple: 2, banana: 1 }
