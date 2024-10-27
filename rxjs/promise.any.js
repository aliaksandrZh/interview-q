// Promise.any(iterable)

const pErr = new Promise((resolve, reject) => {
  reject("Always fails");
});

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Done eventually");
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Done quick");
});

const any = (promises) =>
  new Promise((resolve, reject) => {
    const errors = [];

    promises.forEach((p) => {
      p.then((d) => resolve(d)).catch((error) => {
        errors.push(error);
        if (errors.length === promises.length) {
          reject(errors);
        }
      });
    });
  });

any([pErr, pSlow, pFast])
  .then((value) => {
    console.log(value);
    // pFast fulfills first
  })
  .catch((err) => console.log(err));
// Logs:
// Done quick
