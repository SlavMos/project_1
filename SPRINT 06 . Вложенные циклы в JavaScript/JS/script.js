// ЦИКЛЫ БЫВАЮТ 3 ВИДОВ
//FOR
//WHILE
//DO WHILE

//                               ВЛОЖЕННЫЕ ЦИКЛЫ                       //

let out = document.querySelector(".out");

/*for (let i = 0; i < 6; i++) {
  for (let k = 0; k < 10; k++) {
    out.innerHTML += "*";
  }

  out.innerHTML += "!";
}
*/

//Создаем таблицу умножения

for (let i = 1; i <= 9; i++) {
  for (let k = 1; k < 10; k++) {
    out.innerHTML += `${i}*${k}=${i * k} <br>`;
  }
  out.innerHTML += "<hr>";
}
