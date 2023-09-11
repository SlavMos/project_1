//while
//Do While
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let k = 0;
while (k < 5) {
  k++;
  console.log("k" + k);
}

// найти сумму чисел  от 1 до 10

let sum = 0;
let p = 0;
while (p <= 10) {
  sum = sum + p;
  p++;
}
console.log(sum);

//выведим ****
let out = document.querySelector(".out");
p = 0;
let outStr = "";
while (p < 4) {
  outStr += "*";
  p++;
}

out.innerHTML = outStr;
