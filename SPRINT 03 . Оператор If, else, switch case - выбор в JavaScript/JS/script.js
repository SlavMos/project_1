let a = 6;
const button = document.querySelector("button");
const input = document.querySelector(".age");

// () = > стрелочная функция

// создадим функцию,что бы при клике на кнопку показал валуе инпута
button.onclick = () => {
  let num = +input.value; // + говорит что это число
  if (num >= 16 && num < 60) {
    // && (И)
    console.log("welcom");
  } else if (num > 60) {
    console.log("60+");
  } else {
    console.log("sorry");
  }
};
