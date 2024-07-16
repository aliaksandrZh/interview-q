setTimeout(() => {
  (() => {
    queueMicrotask(() => console.log("Microtask 1"));
    console.log("Listener 1");
  })();
});

setTimeout(() => {
  (() => {
    queueMicrotask(() => console.log("Microtask 2"));
    console.log("Listener 2");
  })();
});
