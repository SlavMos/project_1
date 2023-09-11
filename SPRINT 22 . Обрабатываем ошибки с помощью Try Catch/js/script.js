let a = 5;
a = a * 2;

try {
  // проверяет есть ли ощибка в коде
  document.querySelector(".test").innerHTML = a;
} catch {
  // если есть ошибка то она выводит текст
  console.log("err");
}
