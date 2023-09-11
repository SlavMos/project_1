// дом

const one = document.querySelector(".one");
//присваиваем к one стиль
one.style.width = "150px";
one.style.paddingBottom = "40px";

// мы можем присвоить класс к сущ классу через js (p class = 'one two')

one.classList.add("two");

//мы даже можем добавить несколько классов сразу
one.classList.add("two", "three");

// МЫ ТАКЖЕ МОЖЕМ УДАЛИТЬ КЛАСС

one.classList.remove("three");
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
const toggle = document.querySelector(".toggle");
