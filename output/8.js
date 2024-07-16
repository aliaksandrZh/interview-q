(function () {
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== "undefined"));
console.log("b defined? " + (typeof b !== "undefined"));

/**
 * b = 3
 * var a = b;
 */
