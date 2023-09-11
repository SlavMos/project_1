const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = ["a", "b", "c", "d", "e", "f"];

//  МЕТОД  PUSH ПОЗВОЛЯЕТ ДОБАВЛЯТЬ ЭЛЕМЕНТ В МАССИВ

console.log(a.length);
a.push(10); // добавили элемент в массив
console.log(a.length);
////////////////////
b.push("j", "e");
console.log(b.length);

// МЕТОД POP УДАЛЯЕТ ПОСЛЕДНИЙ ЭЛЕМЕНТ ИЗ МАССИВА
b.pop();
console.log(b.length);

// УДАЛЕНИЯ ЭЛЕМЕНЕТА ВНУТРИ МАССИВА

delete a[3];
console.log(a);
