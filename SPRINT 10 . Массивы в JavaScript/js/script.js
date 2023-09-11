/////// МАССИВЫ
let a = "ivan";

let b = 43;

let iiNumber = 2324;
///////////////////////////////////////////////////
let zodiak = ["kozerog", 1, 1, 19];
let man = ["ivan", "male", 176, 93, "ivanov"];
console.log(man);
console.log(zodiak);
// находим длинну массива
console.log("Длинна массива", man.length);

//как вывезти лююой элемпент массива

console.log(man[3]);

// как поменять что то в массивы(допустим имя)

man[0] = "Slavik";
console.log(man);

//как поменять местами значения массива

let s = [1, 2, 3, 4];
console.log(s);
//задача:измените местакми значения 1 и 4

let vremennaya = s[0]; // МЫ СОЗДАДИМ ВРЕМЕННУЮ ПЕРЕМЕННУЮ ЧТО БЫ ТАМ ХРАНИТЬ ЗНАЧЕНИЕ КОТОРОЕ ХОТИМ ПОМЕНЯТЬ
s[0] = s[3];
console.log(s);
s[3] = vremennaya;
console.log(s);

//////////////ВЫВОД МАССИВОВ(СПОСОБ НОМЕР 1)

//for (let i = 0; i < s.length; i++) {
//  document.querySelector(".out1").innerHTML += s[i] + " ";
//}

//ЛУЧШЕ ДЕЛАТЬ ТАК

let out = "";

for (let i = 0; i < s.length; i++) {
  out += s[i] + "__";
}
document.querySelector(".out1").innerHTML = out;

//можем найти только те значения которые четные(делятся без остатка на два)

for (let i = 0; i < s.length; i++) {
  if (s[i] % 2 == 0) {
    out += s[i] + "__";
  }
}
document.querySelector(".out1").innerHTML = out;

//  найти мин и макс значение

let z = [4, 5, 6, 8, 9, 7, 50, 99];
//MAXIMUM
let max = z[0]; //лежит 4

for (let i = 0; i < z.length; i++) {
  if (z[i] > max) {
    max = z[i];
  }
}

console.log("max: ", max);

//MINIMUM
let min = z[0];

for (i = 0; i < z.length; i++) {
  if (z[i] < min) {
    min = z[i];
  }
}

console.log("min:", min);

//НАЙТИ СУММУ МАССИВА

let summ = 0;

for (let i = 0; i < z.length; i++) {
  summ = summ + z[i];
}
console.log("summ: ", summ);
