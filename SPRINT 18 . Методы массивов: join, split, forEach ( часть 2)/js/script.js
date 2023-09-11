// Map,Filter

let a = [4, 5, 26, 78, -2, 0];

// Метод map() создает новый массив с результатом вызова указанной функции для каждого элемента массива

let b = a.map((item, index) => {
  console.log(item);
  return item;
});

console.log(b);

// TASK Умножить каждый элемента массива на 5
let d = a.map((item, index) => {
  return item * 5;
});

console.log(d);

// Метод filter() создает новый массив со всеми элементами,прошедшими проверку,задаваемую в передаваемой функции

let c = a.filter((item, index) => {
  if (item % 2 === 0) {
    return true;
  }
});
