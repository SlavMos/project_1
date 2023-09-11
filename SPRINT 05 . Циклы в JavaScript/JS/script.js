// ЦИКЛЫ БЫВАЮТ 3 ВИДОВ
//FOR
//WHILE
//DO WHILE
//for( start;rabotaem poka verno; kak izmenyatsya shyotchik)
for (i = 1; i < 10; i++) {
  console.log(i);
}

//млжно рано выйти ищ цикла
for (i = 1; i < 10; i++) {
  if (i == 6) break;
  console.log(i);
}

// c помощью цикла будем управлять divami(massivami)
let div = document.querySelectorAll(".one");
console.log(div);
//div.style.background = "red";

//применили background к divam с помощью цикла
for (i = 0; i < div.length; i++) {
  console.log(div[i]);
  div[i].style.background = "red";

  div[i].onclick = two; // добавили к дивам функцию two
}

function two() {
  console.log("work!");
}

//мы можем с помощью функции узнать какой из input выбрал пользователь

document.querySelector("button").onclick = () => {
  let r = document.querySelectorAll('input[type ="radio"]');
  console.log(r);

  for (let i = 0; i < r.length; i++) {
    if (r[i].checked) {
      console.log(r[i].value);
    }
  }
};
