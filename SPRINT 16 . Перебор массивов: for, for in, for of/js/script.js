//for of and for in

let arr = [4, 7, 9];
// самый простой вывод массива на экран это
// способ номер 1
for (let i = 0; i < arr.length; i++) {
  console.log(i);
}
// способ номер 2
// этот способ сначала дает только индекс[0,1,2],если мы хотим получить значения то добавляем console.log(arr[key])
for (let key in arr) {
  console.log(key);
}

// способ 3

for (let item of arr) {
  console.log(item);
}

//Обход String
let iterable = "boo";

for (let value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"
