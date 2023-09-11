async function f1() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

f1();

async function f2() {
  //создаем объект заголовков(авторизация)
  const requestHeaders = new Headers();
  requestHeaders.append("apikey", "03508a32621d549c");

  const res = await fetch("https://api.itgid.info/api/26/employee/read", {
    method: "GET",
    headers: requestHeaders,
  });
  // if (!res.ok) {
  //  const message = "Error: " + res.status;
  // throw new Error(message);
  // }
  const result = await res.json();
  console.log(result);
}
