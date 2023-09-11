/*const p1 = new Promise(function () {
  // pending - ожидание
});
//console.log(p1); // выводит promise (pending-ojidanie)
//////////////////////////////////////////////////////////
const p2 = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      console.log(response);
      if (response.ok) resolve(response.json()); // прверяем на работу(if true)
      else reject(response); // если есть ошибка
    })
    .catch((error) => reject(error));
});

p2.then(f1, f2);
//f1 если промис работает нормально
function f1(data) {
  console.log(p2);
  console.log("success");
  console.log(data);
}
//f2 если есть проблема
function f2() {
  console.log(p2);
  console.log("Problem");
}

console.log(p2);
*/

//цепочка промисов

const f = fetch("https://jsonplaceholder.typicode.com/posts");

console.log(f);

f.then((response) => response.json);
