const obj = {
  a: {
    b: {
      c: "Hello World!",
    },
  },
  b: {
    c: {
      a: "Good Buy!",
    },
  },
  c: {},
};

const get = (o, path) => {
  const keys = path.split(".");

  return keys.reduce((obj, key) => {
    if (!obj) {
      return obj;
    }

    return obj[key];
  }, o);
};

console.log(get(obj, "a.b.c"));
console.log(get(obj, "b.c.a"));
console.log(get(obj, "c.a.b"));
