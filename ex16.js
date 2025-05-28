// Exercise 16: Write a function named 'sumNestedArray' that takes an array of arrays of numbers and returns the sum of all numbers.

function sumNestedArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let innerArray = arr[i];

    // console.log(arr);

    for (let j = 0; j < innerArray.length; j++) {
      sum += innerArray[j];
    }
  }
  return sum;
}

console.log(
  sumNestedArray([
    [1, 2, 3],
    [4, 5],
    [6, 7, 8],
  ])
); // 36
