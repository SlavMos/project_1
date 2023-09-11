// Напишите функцию что бы при клике на button показал значение ввода(пароль)

document.querySelector("button").onclick = () => {
  console.log(document.querySelector("#pass").value);
};
