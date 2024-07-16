const button = document.createElement("button");
button.textContent = "Click me";
button.style.position = "fixed";
button.style.top = "50%";
button.style.left = "50%";
button.style.zIndex = 99999999;
document.body.appendChild(button);

const clickHandler1 = () => {
  queueMicrotask(() => console.log("Microtask 1"));
  console.log("Listener 1");
};

const clickHandler2 = () => {
  queueMicrotask(() => console.log("Microtask 2"));
  console.log("Listener 2");
};

button.addEventListener("click", clickHandler1);

button.addEventListener("click", clickHandler2);

// button.click()

// When an event (such as a click) occurs, all the event listeners for that event are called synchronously, one after the other. Microtasks (including those scheduled with queueMicrotask) are not executed until the current synchronous code has finished running.

// (() => {
//   queueMicrotask(() => console.log("Microtask 1"));
//   console.log("Listener 1");
// })();

// (() => {
//   queueMicrotask(() => console.log("Microtask 2"));
//   console.log("Listener 2");
// })();
