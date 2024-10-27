// Implement a function that takes two sorted arrays and merges
// them into a single sorted array without using any built-in sorting functions.

const merge = (array1, array2) => {
  const mergedArray = [];

  while (array1.length && array2.length) {
    if (array1[0] > array2[0]) {
      mergedArray.push(array2.shift());
    } else {
      mergedArray.push(array1.shift());
    }
  }

  return [...mergedArray, ...array1, ...array2];
};

console.log(merge([1, 3, 6], [2, 4, 8]));
