function double(arr) {
  arr.forEach(function (val) {
    val * 2;
  });
  return arr;
}
console.log(double([1, 2, 3]));
