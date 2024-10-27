async function get(url, retry) {
  if (retry === 0) {
    throw Error("Url not available");
  }
  try {
    console.log("Request");
    const res = await fetch(url);
    const json = await res.json();
    return json;
  } catch (error) {
    return get(url, retry - 1);
  }
}

get("123", 5)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

get("https://jsonplaceholder.typicode.com/todos/1", 5)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
