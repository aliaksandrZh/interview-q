// Write a function that takes an array of objects and a key,
//and returns a new array sorted based on the values of that
// key in ascending order.

const sortByKey = (array, key) => {
  const arr = JSON.parse(JSON.stringify(array));

  return arr.sort((a, b) => a[key] - b[key]);
};

const arr = [
  {
    index: 1,
  },
  {
    index: 3,
  },
  {
    index: 5,
  },
  {
    index: 2,
  },
  {
    index: 4,
  },
];

console.log(sortByKey(arr, "index"));
