/**
 * 
    1. Function Declaration
    2. Returning a Modified Function
    The sum function returns a new function created by Object.assign.
    3. sum.bind(null, ...args)
    The bind method creates a new function with a specific this value and initial arguments.
    sum.bind(null, ...args) creates a new function where this is bound to null and the arguments are set to the provided args.
    This allows for currying, where the function can be called repeatedly with new arguments.
    4. Object.assign
    Object.assign is used to add properties to the new function created by bind.
    5. valueOf Property
    The valueOf method is defined on the new function.
    valueOf is a method that JavaScript calls when trying to convert an object to a primitive value (e.g., when using the + operator with the object).
    The valueOf method calculates the sum of the args array using the reduce method.
 */
const sum = (...args) => {
  return Object.assign(sum.bind(null, ...args), {
    valueOf: () => args.reduce((a, c) => a + c, 0),
  });
};

const s = (n) => {
  let sum = n;

  if (!n) {
    return sum;
  }

  const nextS = (m) => {
    if (!m) {
      return sum;
    } else {
      sum += m;
      return nextS;
    }
  };

  return nextS;
};

const r = s(1)(2)(3)(4)(5)();
const t = sum(1)(2)(3)(4)(5);
console.log(r, +t);
