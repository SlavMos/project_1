//GET

function f1() {
  //1) создаекм объект запроса
  const xhr = new XMLHttpRequest();

  //2) куда посылаем и параметры
  xhr.open("GET" /*url*/);

  //3) как обрабатываем запрос сервераъ
  xhr.onload = function () {
    console.log(xhr.status);
    console.log(xhr.response);
  };

  // 4)посылаем запрос

  xhr.send();
}

f1();

//POST

function f2() {
  const xhr = new XMLHttpRequest();

  xhr.open("POST" /* URL */);

  xhr.setRequestHeader("apikey", "key");

  const data = new FormData();
  data.append("length", 8);

  xhr.onload = function () {
    console.log(xhr.status);
    const data = JSON.parse(xhr.response);
    console.log(data);
  };
}

f2();
