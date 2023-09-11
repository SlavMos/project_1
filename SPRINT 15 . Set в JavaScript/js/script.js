//SET- это новые объекты которые могут сожержать уникальные значение

let a = new Set();
a.add(1); // добавляем элемент в значение
a.add(13);
a.add("hello");
a.add(2);
console.log(a);

console.log(a[0]); // так не будет работать
console.log(a.lenght); // так тоже не будет работать

console.log(a.size); // так покажет нам длинну сета(кол во элементов  )
// a.clear() - udalyaet vsyo
// a.delete("hello") ---- udalyaet znachenie iz seta

console.log(a.has(2)); // проверяет есть ли там данный объект или нет

for (const item of a) {
  //вывод эелементов из set
  console.log(item);
}

// для чего можем использовать сет (если нам нужно найти уникальные элементы из массива то мы можем сделать это с помощью сета)

let arr = [1, 2, 3, 3, 3, 4, 4, 5, "bla", "bla", "fdsfsd"];

let b = new Set(arr);
console.log(b);
