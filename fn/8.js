// const isAsc = (arr) => {
//   let j = 0;
//   if (arr[0] === arr[j]) {
//     while (arr[j] === arr[0]) {
//       j++;
//     }

//     if (arr[j] === undefined || arr[j] === arr[0]) {
//       return true;
//     }
//   }

//   if (arr[0] > arr[j]) {
//     return false;
//   }

//   return true;
// };

// function isMonotonic(arr) {
//   let isASC = isAsc(arr);

//   for (let i = 1; i < arr.length - 1; i++) {
//     if (isASC) {
//       if (!(arr[i] <= arr[i + 1])) {
//         return false;
//       }
//     } else {
//       if (!(arr[i] >= arr[i + 1])) {
//         return false;
//       }
//     }
//   }

//   return true;
// }

function isMonotonic(arr) {
  const firstThreeNotRepeated = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (firstThreeNotRepeated[firstThreeNotRepeated.length - 1] !== arr[i]) {
      firstThreeNotRepeated.push(arr[i]);
    }

    if (firstThreeNotRepeated.length === 3) {
      const [first, second, third] = firstThreeNotRepeated;

      if (Math.sign(first - second) !== Math.sign(second - third)) {
        return false;
      }
    }
  }

  return true;
}

console.log(isMonotonic([1, 2, 3, 6]));
console.log(isMonotonic([6, 3, 3, 2, 1]));
console.log(isMonotonic([1, 1, 1, 1]));
console.log(isMonotonic([1, 10, 6]));
