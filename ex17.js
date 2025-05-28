// Exercise 17: Write a function named 'mostFrequent' that takes an array of strings and returns the string that appears the most frequently.

function mostFrequent(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      console.log(arr[i]);
    }
  }
  return arr;
}

console.log(
  mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"])
); // 'apple'
