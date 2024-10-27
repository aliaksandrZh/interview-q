const req = (input, init) => {
  const abortController = new AbortController();
  const signal = abortController.signal;
  return {
    fetch: () => fetch(input, { ...init, signal }),
    abort: () => abortController.abort(),
  };
};

const r = req("https://jsonplaceholder.typicode.com/todos/1");
r.fetch();
r.abort();
