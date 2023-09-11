

// получаем элемент через js с помощью id

document.getElementById('out').innerHTML = 'hello';
document.getElementById('out').innerHTML = 2019;

//inner html позволяет менять данные внутри





// лучше так использовать это новое
//'.header' имя класса
document.querySelector('.header').innerHTML = 'Hello';

// '#one' айдишка
document.querySelector('#one').innerHTML = 'Hello My Name Is Anton';



// БУДЕТ ЛЕГЧЕ ИСПОЗЬЗОВАТЬ ПЕРЕМЕННУЮ,ЧТО БЫ МАЛО ПАМЯТИ ТРАТИТЬ + ТАК ПРАВИЛЬНО



let one = document.querySelector('.header');
one.innerHTML = 'HELP!';