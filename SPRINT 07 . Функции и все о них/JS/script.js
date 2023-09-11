//функции

/////RETURM

// СОЗДАЛ ПРОСТУЮ ФУНКЦИЮ ПРИ КОТОРОМ НА НАЖАТИЕ НА КНОПКУ РАБОТАЛА ФУНКИЦИЯ КОТОРАЯ ДОБАВЛЯЛЯ В ПУСТОЙ DIV ПЕРЕМЕННУЮ LET A
let a = "*";

function one() {
  document.querySelector(".out-1").textContent = a;
}

document.querySelector(".task").onclick = one;

////////////////////////////////////////////////////

function calculateAndLogNUmber() {
  let x = 5;
  x = x + 100;
  x = x / 5;

  console.log(x);
}

/////// функция reeturn возвращает значения

function calculateNUmber() {
  let x = 5;
  x = x + 100;
  x = x / 5;
  return x; /// то что получили в функции сохранилось в ретурне
}

const result = calculateNUmber();

/// параметры функии.внутри скобок можем дать параметр и его использовать вместо чисел
//НАПРИМЕР

function calculateNUmberR(tirqutivt) {
  let x = tirqutivt;
  x = x + 100;
  x = x / 5;
  return x; /// то что получили в функции сохранилось в ретурне
}

const resultat = calculateNUmberR(500);

// SOZDADIM FUNKCIYU KOTORAYA NAXODIT PLOSHYAD KRUGA

function calculateCircleAre(circleRadius) {
  return 3.14 * circleRadius ** 2;
}
//МЫ СОЗДАЛИ РАБОЧУЮ ФУНКЦИЮ КОТОРАЯ СЧИТАЕТ ПЛОЩАДЬ КРУГА.ТЕПЕРЬ МЫ МОЖЕМ С ЛЕГКОСТЬЮ СЧИТТАТЬ ЛЮБУЮ ПЛОЩАДЬ
// МЫ ПРОСТО ДОЛЖЕН ДАТЬ ПЕРЕМЕННУЮ И ПОСТАВИТЬ ФУНКЦИЮ И ДАТЬ ПАРАМЕТР КАК ВНИЗУ
//   const circleArea1 = calculateCircleAre(4);
//   console.log(circleArea1);

//СОЗДАДИМ ФУНКЦИЮ КОТОРАЯ ДОБАВЛЯЕТ HTML ЭЛЕМЕНТЫ И ВОЗВРАЩАТЬ ЕГО

function createHTMLElement(tag, id, text) {
  const element = document.createElement(tag);
  element.id = id;
  element;
  element.innerText = text;
  return element;
}

const h1Element = createHTMLElement("h2", "hello", "sl");

// dobavim vivod funkcii na ekran,a ne v konsol

document.body.append(h1Element);

// ПЕРЕМЕННАЯ ARGUMENTS В ФУНКЦИИ

function logArgsToConsole() {
  console.log(arguments);
}

logArgsToConsole(1, 2, 3, 45, 5, 654654);
