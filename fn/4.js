// Implement a debounce function in JavaScript that limits the
// frequency of a function’s execution when it’s called repeatedly within
// a specified time frame.

const debounce = (fn, n = 1000) => {
  let timer = null;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn(args);
      clearTimeout(timer);
    }, n);
  };
};

const log = debounce((x) => console.log(x));

log(1);
log(2);
log(3);
log(4);
log(5);
