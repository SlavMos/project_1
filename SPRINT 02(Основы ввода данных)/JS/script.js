let a = 6;
let b = 7;

console.log(b);


let inputIn = document.querySelector('.input-in');//нашли инпут
let button = document.querySelector('button');// нашли кнопку



//дали buttonu функцию клик(чтоб при клике что то делала)


button.onclick = function () {

    // функция выполняется только при нажатии на кнопку

    console.log('work')// выводит 'work'

    console.log(inputIn.value); // выводит 'value' inputa 
}